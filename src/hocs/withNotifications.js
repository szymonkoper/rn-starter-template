import React, { useEffect } from 'react'
import { constants, initializeChannel } from 'notifications'

const withNotifications = () => Component => props => {
  useEffect(() => {
    initializeChannel(constants.defaultChannelDetails)
  }, [])

  return <Component {...props} />
}

export default withNotifications
