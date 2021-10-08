<template>
  <div class="row align-middle">
    <div class="col-md-6 order-2 image">
      <Image location="homepage/podcast" />
    </div>
    <div class="col-md-6 order-1 left">
      <div class="text-center">
        <h1>Get inspired with interviews to CTOs of successful startups</h1>
      </div>
      <div class="buttons">
        <div class="mt-3"><Button primary label="Podcast" /></div>
      </div>
    </div>
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
  padding: 0px 150px 0px 150px;

  @media (min-width: $md) {
    padding: 0px 150px 0px 150px;
  }
  @media (min-width: $xs) {
    padding: 0px 100px 0px 100px;
  }
  @media (min-width: $xss) {
    padding: 0px 50px 0px 50px;
  }
}
</style>