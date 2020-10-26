<template>
  <Search/>
  <Suspense>
    <template #default>
      <Products/>
    </template>
    <template #fallback>
      <Spinner />
    </template>
  </Suspense>
</template>

<script>
import Search from '@/components/Search.vue'
import { defineAsyncComponent } from 'vue'
import Spinner from '@/components/Spinner.vue'

const Products = defineAsyncComponent(
  () => import('@/components/Products.vue')
)

export default {
  name: 'Home',
  components: {
    Search,
    Products,
    Spinner
  }
}
</script>

<style>
</style>
