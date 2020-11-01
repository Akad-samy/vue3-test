<template>
  <div class="info container">
    <div class="row">
      <div class="productCard">
        <ProductCard
          :brand="products.brand"
          :title="products.title"
          :nutriscore="products.nutri_score"
          :novagroup="products.nova_group"
        />
      </div>
      <div class="reviews">
        <button type="button" class="btn btn-primary">storage</button>
      </div>
    </div>
    <div @click="addToFavories()">
      <button v-if="exist === false" type="button" name="" id="" class="btn btn-danger" btn-lg btn-block>
        Add to Favories
        <svg  width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 2.748l-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>
        </svg>
      </button>
      <button v-else type="button" name="" id="" class="btn btn-outline-danger">
        Remove from Favories
        <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
import useProducts from '../modules/productsModule'
import useReviews from '../modules/reviewsModule'
import useFavories from '../modules/favoriesModule'
import { defineAsyncComponent, onBeforeMount, ref } from 'vue'
import { useRoute } from 'vue-router'

const ProductCard = defineAsyncComponent({
  loader: () => import('@/components/ProductCard.vue')
})

export default {
  name: 'ProductDetails',
  components: {
    ProductCard
  },

  setup () {
    const { products, getSingleProduct } = useProducts()
    const { getProductReviews } = useReviews()
    const { setInFavories, items, updateFavories } = useFavories()
    const {
      params: { codebar }
    } = useRoute()
    const exist = ref(false)

    onBeforeMount(async () => {
      await getSingleProduct(codebar)
      await getProductReviews(codebar)
    })

    const addToFavories = () => {
      exist.value = !exist.value
      if (exist.value === true) {
        setInFavories(products.value)
      } else {
        const index = items.value.indexOf(products) + 1
        if (index > -1) {
          items.value.splice(index, 1)
          updateFavories()
        }
      }
    }

    return {
      products,
      getSingleProduct,
      addToFavories,
      exist
    }
  }
}
</script>

<style>
.info {
  height: calc(100vh - 100px - 60px);
  padding: 45px;
  display: flex;
  flex-flow: column;
  justify-content: center;

  box-shadow: 3px 3px 6px #f0f1f19a, -3px -3px 6px #f0f1f19a;
  border-radius: 15px;
}
.row {
  justify-content: space-around;
}
.info .reviews {
  background-color: #f8f9fa;
  border-radius: 15px;
  width: 550px;
}
</style>
