<template>
  <div>
    <img
      :src="require(`@/assets/images/homepage/${location}.png`)"
      class="image"
    />
  </div>
</template>

<script>
export default {
  name: "image",

  props: {
    location: {
      type: String,
      required: true,
      default: "community",
    },
  },
};
</script>

<style lang="scss" scoped>
.image {
  display: block;
  height: 400px;
  width: auto;
}
</style>