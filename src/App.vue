<template>
  <NavBar/>
  <div class="container">
    <transition name="view">
      <router-view></router-view>
    </transition>
  </div>
  <Footer/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    NavBar,
    Footer
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

a {
    color: #2c3e50 !important;
    text-decoration: none !important;
  }

.router-link-exact-active {
    color: #f1be1c !important;
    font-size: 25px;
    border-bottom: #f1be1c 3px solid;
    padding-bottom: 10px;
  }

view-enter-active, .view-leave-active {
  transition: opacity 0.5s ease-in-out, transform 0.5s ease;
}
.view-enter-active {
  transition-delay: 0.5s;
}
.view-enter-from {
  opacity: 0;
  transform: translateX(-50vw);
}
.view-enter-to {
  opacity: 1;
  transform: translateX(0px);
}
.view-leave-from {
  opacity: 1;
  transform: translateY(0px);
}
.view-leave-to {
  opacity: 0;
  transform: translateY(100px);
}

</style>
