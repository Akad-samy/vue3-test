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
        test2
      </div>
    </div>
  </div>
</template>

<script>
import useProducts from '../modules/productsModule'
import useReviews from '../modules/reviewsModule'
import { defineAsyncComponent, onBeforeMount } from 'vue'
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
    const {
      params: { codebar }
    } = useRoute()

    onBeforeMount(async () => {
      await getSingleProduct(codebar)
      await getProductReviews(codebar)
    })

    return {
      products,
      getSingleProduct
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
