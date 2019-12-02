export const VARIANT = {
  REQUEST: 'REQUEST',
  SUCCESS: 'SUCCESS',
  FAILURE: 'FAILURE',
  RESET: 'RESET'
}

const createActionType = (prefix, variant) => `${prefix}_${variant}`

export const createActionTypesGenerator = prefix => variant =>
  createActionType(prefix, variant)
