<template>
  <div class="title mt-3">
    <div class="logo">
      <Image location="logo" />
    </div>
    <div class="h-100 ms-3 text">Developer to Entrepreneur</div>
  </div>
</template>

<script>
import Image from "@/atoms/Image.vue";

export default {
  components: { Image },
};
</script>

<style lang="scss" scoped>
.title {
  display: flex;
  justify-content: center;
  align-items: center;
  font: $main-font-title, sans-serif;
  margin-bottom: 150px;
}
.text {
  max-width: 300px;
}
.logo {
  max-width: 70px;
}
</style>