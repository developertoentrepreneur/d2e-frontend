<template>
  <div class="row align-middle">
    <div class="col-md-6 left">
      <div class="text">
        <h1>Find and engage with other entreprepreurs.</h1>
      </div>
      <div class="buttons"><Button /></div>
    </div>
    <div class="col-md-6 image"><Image /></div>
  </div>
</template>

<script>
import Button from "@/atoms/Button.vue";
import Image from "@/atoms/Image.vue";
export default {
  components: { Button, Image },
};
</script>

<style scoped lang="scss">
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.image {
  padding: 50px;
}
</style>