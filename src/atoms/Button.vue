<template>
  <button type="button" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
import { reactive, computed } from "vue";

export default {
  name: "Button",

  props: {
    label: {
      type: String,
      default: "Button",
    },
    primary: {
      type: Boolean,
      default: false,
    },
    size: {
      type: String,
      validator: function (value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      },
    },
    backgroundColor: {
      type: String,
    },
  },

  emits: ["click"],

  setup(props, { emit }) {
    props = reactive(props);
    return {
      classes: computed(() => ({
        "storybook-button": true,
        "storybook-button--primary": props.primary,
        "storybook-button--secondary": !props.primary,
        [`storybook-button--${props.size || "medium"}`]: true,
      })),
      style: computed(() => ({
        backgroundColor: props.backgroundColor,
      })),
      onClick() {
        emit("click");
      },
    };
  },
};
</script>

<style lang="scss" scoped>
.storybook-button {
  font-family: "Montserrat", sans-serif;
  font-weight: 700;
  border: 0;
  border-radius: 3em;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  transition: all 0.2s;
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
  &:hover {
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.1);
    transform: translateY(-2px);
  }

  &--primary {
    color: white;
    background-color: $primary;
    &:hover {
      color: white;
      background-color: $primary-light;
    }
  }
  &--secondary {
    color: white;
    background-color: $secondary;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
    &:hover {
      background-color: $secondary-light;
    }
  }
  &--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &--medium {
    font-size: 14px;
    padding: 11px 20px;
  }
  &-button--large {
    font-size: 16px;
    padding: 12px 24px;
  }
}
</style>
