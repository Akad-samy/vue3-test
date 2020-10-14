<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Search/>
  <Products/>
</template>

<script>
import Products from './components/Products.vue'
import Search from './components/Search.vue'

export default {
  name: 'App',
  components: {
    Products,
    Search
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
