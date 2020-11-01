<template>
  <Search />
  <Products />
</template>

<script>
import Search from '@/components/Search.vue'
import { defineAsyncComponent } from 'vue'

const Products = defineAsyncComponent(() =>
  import('@/components/Products.vue')
)

export default {
  name: 'Home',
  components: {
    Search,
    Products
  }
}
</script>

<style></style>
