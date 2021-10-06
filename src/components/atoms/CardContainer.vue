<template>
  <div :class="`${large ? 'large' : ''} deal-card`">
    <slot><div class="color">Hello</div></slot>
  </div>
</template>

<script>
export default {
  name: "CardContainer",
  props: {
    large: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.color {
  color: $grey-300;
}
.deal-card {
  width: 312px;
  min-height: 209px;
  padding: 16px;
  border: 1px solid $grey-500;
  border-radius: 12px;
  background-color: $white;
  transition: border-color 0.3s ease;
  &:hover {
    border-color: $grey-300;
  }
}
.grid {
  .deal-card {
    width: auto;
    &.large {
      @media (min-width: 744px) {
        grid-column: span 2;
      }
    }
  }
}
</style>