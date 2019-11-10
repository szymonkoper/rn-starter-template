import ApolloClient from 'apollo-boost'
import Config from 'react-native-config'

export default new ApolloClient({
  uri: Config.API_GQL_URL
})
