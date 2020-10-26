<template>
  <div class="d-flex flex-wrap justify-content-center">
    <router-link
      v-for="product in products"
      :key="product.codebar"
      :to="{ name: 'ProductDetails', params: { codebar: product.codebar } }"
    >
      <ProductCard
        :brand="product.brand"
        :title="product.title"
        :nutriscore="product.nutri_score"
        :novagroup="product.nova_group"
      />
    </router-link>
  </div>
</template>

<script>
import { onBeforeMount } from 'vue'
import useProducts from '../modules/productsModule'
import ProductCard from './ProductCard'

export default {
  components: {
    ProductCard
  },

  setup () {
    const { products, getProducts } = useProducts()
    onBeforeMount(async () => {
      await getProducts()
    })
    return { products }
  }
}
</script>

<style></style>
