import { VARIANT, createActionTypesGenerator } from 'utils/reduxUtils'

const PREFIX = 'LATEST_COMIC_GET'

const actionTypesGenerator = createActionTypesGenerator(PREFIX)

export const LATEST_COMIC_GET_REQUEST = actionTypesGenerator(VARIANT.REQUEST)
export const LATEST_COMIC_GET_SUCCESS = actionTypesGenerator(VARIANT.SUCCESS)
export const LATEST_COMIC_GET_FAILURE = actionTypesGenerator(VARIANT.FAILURE)
