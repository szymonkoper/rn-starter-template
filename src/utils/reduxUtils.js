export const VARIANT = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE'
}

const createActionType = (prefix, variant) => `${prefix}_${variant}`

export const createActionTypesGenerator = prefix => variant =>
  createActionType(prefix, variant)
