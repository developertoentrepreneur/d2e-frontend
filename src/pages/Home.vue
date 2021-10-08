<template>
  <div>
    <div class="content-container">
      <SectionCommunity />
      <div class="spacing"></div>
      <SectionPodcast />
      <div class="spacing"></div>
      <SectionTutorials />
    </div>
  </div>
</template>

<script>
import SectionCommunity from "@/pages/Home/Components/SectionCommunity.vue";
import SectionPodcast from "@/pages/Home/Components/SectionPodcast.vue";
import SectionTutorials from "@/pages/Home/Components/SectionTutorials.vue";

export default {
  name: "HelloWorld",
  components: { SectionCommunity, SectionPodcast, SectionTutorials },
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.spacing {
  @media (max-width: $xl) {
    margin: 50px 0px 50px 0px;
  }
  @media (max-width: $lg) {
    margin: 100px 0px 100px 0px;
  }
  @media (max-width: $md) {
    margin: 100px 0px 100px 0px;
  }
  @media (max-width: $xs) {
    margin: 120px 0px 120px 0px;
  }
}
</style>
