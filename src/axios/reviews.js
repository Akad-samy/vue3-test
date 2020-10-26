import httpClient from './HttpClient'

const END_POINT = '/products'
const getReviews = (code, page) => httpClient.get(END_POINT + `/${code}/reviews?page=${page}`)

export {
  getReviews
}
