import { reactive, toRefs } from 'vue'
import { getReviews } from '../axios/reviews'

export default function useReviews () {
  const state = reactive({
    page: 1,
    reviews: [],
    error: ''
  })

  const getProductReviews = async (code) => {
    console.log(getReviews(code, state.page))
  }

  return { ...toRefs(state), getProductReviews }
}
