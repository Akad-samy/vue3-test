<template>
  <div class="d-flex flex-wrap justify-content-center">
    <Suspense>
      <template #default>
        {{ products }}
        <ProductCard v-for="product in products" :key="product.codebar" />
      </template>
      <template #fallback>
        <h2>Loading ...</h2>
      </template>
    </Suspense>
  </div>
</template>

<script>
import useProducts from '../modules/productsModule'
import ProductCard from './ProductCard'

export default {
  components: {
    ProductCard
  },
  setup () {
    const { products } = useProducts();
    return { products };
  }
};
</script>

<style></style>
