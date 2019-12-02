import { VARIANT, createActionTypesGenerator } from 'utils/reduxUtils'

const PREFIX = 'COMICS_PAGE_GET'

const actionTypesGenerator = createActionTypesGenerator(PREFIX)

export const COMICS_PAGE_GET_REQUEST = actionTypesGenerator(VARIANT.REQUEST)
export const COMICS_PAGE_GET_SUCCESS = actionTypesGenerator(VARIANT.SUCCESS)
export const COMICS_PAGE_GET_FAILURE = actionTypesGenerator(VARIANT.FAILURE)
export const COMICS_PAGE_GET_RESET = actionTypesGenerator(VARIANT.RESET)
