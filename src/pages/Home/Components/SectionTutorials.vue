<template>
  <div class="row align-middle">
    <div class="col-md-6 left">
      <div class="text-center">
        <h1>Learn with great tutorials on how to create your own startup</h1>
      </div>
      <div class="buttons">
        <div class="mt-3"><Button label="Tutorials" /></div>
      </div>
    </div>
    <div class="col-md-6 image"><Image location="homepage/tutorial" /></div>
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
.buttons {
  width: 100%;
  display: flex;
  justify-content: center;
}
.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  align-items: center;
}
.image {
  padding: 0px 250px 0px 250px;

  @media (min-width: $md) {
    padding: 0px 170 0px 170;
  }
  @media (min-width: $xs) {
    padding: 0px 120px 0px 120px;
  }
  @media (min-width: $xss) {
    padding: 0px 70px 0px 70px;
  }
}
</style>