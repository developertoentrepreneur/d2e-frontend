<template>
  <div>
    <img :src="require(`@/assets/images/${location}.png`)" />
  </div>
</template>

<script>
export default {
  name: "image",

  props: {
    location: {
      type: String,
      required: true,
      default: "homepage/community",
    },
  },
};
</script>

<style>
</style>