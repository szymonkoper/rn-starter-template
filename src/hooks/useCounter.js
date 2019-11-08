import { useCallback, useState } from 'react'
import { debounce } from 'lodash'

export default (initialValue = 0, debounceTime = null) => {
  const [value, setValue] = useState(initialValue)

  const reset = () => setValue(initialValue)

  const debouncedReset = debounceTime
    ? useCallback(debounce(reset, debounceTime), [])
    : () => {}

  const setValueWithTimeoutReset = newValue => {
    setValue(newValue)
    debouncedReset()
  }

  const increment = () => setValueWithTimeoutReset(value + 1)
  const decrement = () => setValueWithTimeoutReset(value - 1)

  return { value, increment, decrement, reset, setValue }
}
