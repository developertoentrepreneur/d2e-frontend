<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Home msg="Welcome to Your Vue.js App" />
</template>

<script>
import Home from "@/pages/Home.vue";

export default {
  name: "App",
  components: {
    Home,
  },
};
</script>

<style lang="scss" >
#app {
  font-family: $main-font-regular, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
