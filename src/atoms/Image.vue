<template>
  <div class="d-flex justify-content-center">
    <img :src="require(`@/assets/images/${location}.png`)" class="d2e-image" />
  </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.min.css";

export default {
  name: "Image",

  props: {
    location: {
      type: String,
      default: "homepage/community",
    },
  },
};
</script>

<style lang="scss" scoped>
.d2e-image {
  display: block;
  max-width: 100%;
  width: auto;
}
</style>