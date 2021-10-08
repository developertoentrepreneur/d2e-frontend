<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <Home msg="Welcome to Your Vue.js App" />
  <Image />
</template>

<script>
import Home from "@/pages/Home.vue";
import Image from "@/atoms/Image.vue";

export default {
  name: "App",
  components: {
    Home,
    Image,
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
