<template>
  <div id="app">
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Footer from "./components/Footer/Footer.vue";

export default {
  name: "app",
  components: {
    Footer
  }
};
</script>

<style>
</style>
