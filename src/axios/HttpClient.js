import axios from 'axios'

const httpClient = axios.create({
  baseURL: 'https://degrassi-crown-08212.herokuapp.com',
  headers: {
    'Content-Type': 'application/json'
  }
})

export default httpClient
