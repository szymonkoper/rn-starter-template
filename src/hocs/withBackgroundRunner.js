import React, { useEffect } from 'react'
import BackgroundFetch from 'react-native-background-fetch'

const OPTIONS = {
  minimumFetchInterval: 15,
  // Android options:
  enableHeadless: true,
  requiredNetworkType: BackgroundFetch.NETWORK_TYPE_ANY,
  requiresBatteryNotLow: false,
  requiresCharging: false,
  requiresDeviceIdle: false,
  requiresStorageNotLow: false,
  startOnBoot: true,
  stopOnTerminate: false
}

function initializeBackgroundFetch(backgroundTask) {
  BackgroundFetch.configure(
    OPTIONS,
    () => {
      backgroundTask()

      BackgroundFetch.finish(BackgroundFetch.FETCH_RESULT_NEW_DATA)
    },
    () => {
      // eslint-disable-next-line no-console
      console.error('Background fetcher failed to start')
    }
  )
}

function registerHeadlessTask(backgroundTask) {
  // has effect only on Android
  BackgroundFetch.registerHeadlessTask(async () => {
    backgroundTask()
    BackgroundFetch.finish()
  })
}

const withBackgroundRunner = backgroundTask => Component => props => {
  useEffect(() => {
    if (!backgroundTask) return

    initializeBackgroundFetch(backgroundTask)
    registerHeadlessTask(backgroundTask)
  }, [])

  return <Component {...props} />
}

export default withBackgroundRunner
