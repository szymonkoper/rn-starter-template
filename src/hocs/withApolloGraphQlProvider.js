import React from 'react'
import { ApolloProvider } from '@apollo/react-hooks'
import { graphqlClient as client } from 'api'

export default Component => props => (
  <ApolloProvider client={client}>
    <Component {...props} />
  </ApolloProvider>
)
