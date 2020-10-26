import { reactive, toRefs } from 'vue'
import { getAllProducts, getProductByCodeBar } from '../axios/products.api'

export default function useProducts () {
  const state = reactive({
    search: '',
    pageSize: 9,
    page: 1,
    products: [],
    error: ''
  })

  const getProducts = async () => {
    console.log(state.search)
    try {
      const data = await getAllProducts(state.search, state.pageSize, state.page)
      state.products = data.data.data
      console.log(state.products)
    } catch (e) {
      state.error = e
    }
  }

  const getSingleProduct = async (codebar) => {
    try {
      state.products = []
      const data = await getProductByCodeBar(codebar)
      state.products = data.data.data
      console.log(state.products)
    } catch (error) {
      state.error = error
    }
  }

  return { ...toRefs(state), getProducts, getSingleProduct }
}
