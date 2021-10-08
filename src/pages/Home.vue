<template>
  <div>
    <div class="content-container">
      <SectionCommunity />
      <SectionPodcast />
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
</style>
