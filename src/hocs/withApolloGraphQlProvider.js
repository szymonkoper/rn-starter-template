import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import client from 'api/graphql'

export default Component => props => (
  <ApolloProvider client={client}>
    <Component {...props} />
  </ApolloProvider>
)
