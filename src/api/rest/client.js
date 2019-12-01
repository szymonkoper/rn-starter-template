import axios from 'axios'
import Config from 'react-native-config'

export default axios.create({
  baseURL: Config.API_REST_URL,
  responseType: 'json'
})
