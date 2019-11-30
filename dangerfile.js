import { danger, message, warn } from 'danger'

const modifiedMD = danger.git.modified_files.join('- ')
message(`Changed Files in this PR: \n - ${modifiedMD}`)

const packageChanged = danger.git.modified_files.includes('package.json')
const lockfileChanged = danger.git.modified_files.includes('yarn.lock')
if (packageChanged && !lockfileChanged) {
  warn(
    'Changes were made to package.json, but not to yarn.lock - <i>Perhaps you need to run `yarn install`?</i>'
  )
}
