<template>
  <ul id="navbar">
    <li><router-link to="/">Home</router-link></li>
  </ul>
</template>

<script>
export default {

}
</script>

<style>
  #navbar {
    height: 40px;
    margin: 0;
    padding: 0;
  }
  #navbar li{
    display: inline-block;
    margin: 0 20px;
    font-weight: 600;
  }

</style>
