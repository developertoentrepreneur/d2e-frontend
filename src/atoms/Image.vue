<template>
  <div class="row">
    <div class="col-xl-2 col-6">
      <img
        :src="require(`@/assets/images/homepage/${location}.png`)"
        class="image"
      />
    </div>

    <div class="dropdown">
      <button
        class="btn btn-secondary dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Check Bootstrap
      </button>
      <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        <li><a class="dropdown-item" href="#">Action</a></li>
        <li><a class="dropdown-item" href="#">Another action</a></li>
        <li><a class="dropdown-item" href="#">Something else here</a></li>
      </ul>
    </div>
  </div>
</template>

<script>
// import "bootstrap/dist/css/bootstrap.min.css";

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
  max-width: 100%;
  width: auto;
}
</style>