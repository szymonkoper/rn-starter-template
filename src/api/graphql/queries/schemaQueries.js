import { gql } from 'apollo-boost'

// TODO: Queries don't have to be in JS files.
// It's possible to use webpack loader to store queries in *.gql files and interpret them in JS
// https://github.com/apollographql/graphql-tag#webpack-preprocessing-with-graphql-tagloader
// eslint-disable-next-line import/prefer-default-export
export const schemaQueriesQuery = gql`
  query {
    rates(currency: "USD") {
      currency
      rate
    }
  }
`
