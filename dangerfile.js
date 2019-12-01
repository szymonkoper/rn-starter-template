import path from 'path'
import fs from 'fs'
import { exec } from 'child_process'
import { danger, fail, message, schedule, warn } from 'danger'
import { istanbulCoverage } from 'danger-plugin-istanbul-coverage'
import yarnPlugin from 'danger-plugin-yarn'

const modifiedFiles = danger.git.modified_files

function verifyUpdatedLockedPackages() {
  const packageChanged = modifiedFiles.includes('package.json')
  const lockfileChanged = modifiedFiles.includes('yarn.lock')

  if (packageChanged && !lockfileChanged) {
    warn(
      '⚠️ Changes were made to `package.json`, but not to `yarn.lock`. Forgot to install them?'
    )
  }
}

async function verifyPackageVersionUpdate() {
  const packageChanged = modifiedFiles.includes('package.json')

  function warnPackageNotChanged() {
    warn('⚠️ Package version was not updated. Is it intentional?')
  }

  if (!packageChanged) {
    warnPackageNotChanged()
    return
  }

  try {
    const { diff } = await danger.git.diffForFile('package.json')

    const PACKAGE_VERSION_OLD_PATTERN = /^-\s+"version":\s"(\d+[.\d+]*)".*$/m
    const PACKAGE_VERSION_NEW_PATTERN = /^\+\s+"version":\s"(\d+[.\d+]*)".*$/m

    const oldMatch = PACKAGE_VERSION_OLD_PATTERN.exec(diff)
    const newMatch = PACKAGE_VERSION_NEW_PATTERN.exec(diff)
    if (oldMatch && newMatch) {
      message(
        `⬆️ Package version updated from ${oldMatch[1]} to ${newMatch[1]}`
      )
    } else {
      warnPackageNotChanged()
    }
  } catch (error) {
    fail(
      `💥 Could not verify package version. Error message: <i>${error.message}</i>`
    )
  }
}

async function verifyLinter() {
  function countLines(lines, pattern) {
    return lines.reduce((sum, line) => (pattern.test(line) ? sum + 1 : sum), 0)
  }

  const eslintPromise = new Promise((resolve, reject) => {
    exec('yarn lint', (_, linterResult) => {
      try {
        const lines = linterResult.split(/\r?\n/)

        const LINT_ERROR_PATTERN = /^\s+\d+:\d+\s+error\s+.+$/
        const LINT_WARNING_PATTERN = /^\s+\d+:\d+\s+warning\s+.+$/

        const errorsCount = countLines(lines, LINT_ERROR_PATTERN)
        const warningsCount = countLines(lines, LINT_WARNING_PATTERN)
        resolve({ errorsCount, warningsCount })
      } catch (error) {
        reject(error)
      }
    })
  })

  try {
    const { errorsCount, warningsCount } = await eslintPromise

    if (errorsCount > 0) {
      fail(
        `🔴 Linter found ${errorsCount} error[s] and ${warningsCount} warning[s]`
      )
    } else if (warningsCount > 0) {
      warn(`🟡 Linter found ${warningsCount} warning[s]`)
    } else {
      message('🟢 No linter errors nor warnings were found')
    }
  } catch (error) {
    fail(`💥 Could not verify linter. Error message: <i>${error.message}</i>`)
  }
}

function verifyTests() {
  try {
    const { numFailedTests, numTotalTests } = JSON.parse(
      fs.readFileSync(path.resolve(__dirname, './coverage/test-results.json'))
    )

    if (numFailedTests === 0) {
      message('🟢 Unit tests passed')
    } else {
      fail(
        `🔴 Unit tests failed. Error in ${numFailedTests} of total ${numTotalTests} tests`
      )
    }
  } catch (error) {
    fail(
      `💥 Could not verify tests results. Error message: <i>${error.message}</i>`
    )
  }
}

function verifyTestsCoverage() {
  return istanbulCoverage({
    coveragePath: {
      path: path.resolve(__dirname, './coverage/lcov.info'),
      type: 'lcov'
    },
    numberOfEntries: 15,
    reportFileSet: 'createdOrModified',
    threshold: {
      statements: 50,
      branches: 50,
      functions: 50,
      lines: 50
    }
  })
}

verifyUpdatedLockedPackages()
schedule(verifyPackageVersionUpdate)
schedule(verifyLinter)
verifyTests()
schedule(verifyTestsCoverage())
schedule(yarnPlugin())
