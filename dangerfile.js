import { danger, fail, message, schedule, warn } from 'danger'

function verifyUpdatedLockedPackages() {
  const modifiedFiles = danger.git.modified_files
  const packageChanged = modifiedFiles.includes('package.json')
  const lockfileChanged = modifiedFiles.includes('yarn.lock')

  if (!packageChanged && !lockfileChanged) {
    message('No dependencies versions were changed')
  } else if (!packageChanged && lockfileChanged) {
    message('Dependencies locked versions were updated')
  } else if (packageChanged && !lockfileChanged) {
    warn(
      'Changes were made to `package.json`, but not to `yarn.lock`. Forgot to install them?'
    )
  } else {
    message('Dependencies were updated')
  }
}

async function verifyPackageVersionUpdate() {
  try {
    const { diff } = await danger.git.diffForFile('package.json')

    const PACKAGE_VERSION_OLD_PATTERN = /^-\s+"version":\s"(\d+[.\d+]*)".*$/m
    const PACKAGE_VERSION_NEW_PATTERN = /^\+\s+"version":\s"(\d+[.\d+]*)".*$/m

    const oldMatch = PACKAGE_VERSION_OLD_PATTERN.exec(diff)
    const newMatch = PACKAGE_VERSION_NEW_PATTERN.exec(diff)
    if (oldMatch && newMatch) {
      message(`Package version updated from ${oldMatch[1]} to ${newMatch[1]}`)
    } else {
      warn('Package version was not updated. Is it intentional?')
    }
  } catch (error) {
    fail(
      `Could not verify package version. Error message: <i>${error.message}</i>`
    )
  }
}

verifyUpdatedLockedPackages()
schedule(verifyPackageVersionUpdate)
