export const TYPE_SUFFIX = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

const createActionType = (prefix, variant) => `${prefix}_${variant}`

export const createActionTypesGenerator = prefix => variant =>
  createActionType(prefix, variant)
