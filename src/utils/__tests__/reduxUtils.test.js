import { createActionTypesGenerator } from '../reduxUtils'

describe('reduxUtils', () => {
  describe('createActionTypesGenerator', () => {
    it('creates action type', () => {
      const actionTypePrefix = 'EXAMPLE_ACTION_SUFFIX'
      const generateActionType = createActionTypesGenerator(actionTypePrefix)

      const actionTypeSuffix = 'REQUEST'
      expect(generateActionType(actionTypeSuffix)).toEqual(
        `${actionTypePrefix}_${actionTypeSuffix}`
      )
    })
  })
})
