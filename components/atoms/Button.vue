<template>
  <component
    :is="tag"
    :type="nativeType"
    v-bind="$attrs"
    :theme-color="themeColor"
    :theme-bg-color="themeBgColor"
    :class="getBtnEffects"
    class="
      inline-flex
      justify-center
      items-center
      shadow-500
      hover:shadow-200
      active:shadow-300
      space-x-200
      py-300
      px-400
      font-bold
    "
    @click="$emit('click', $event)"
  >
    <font-awesome-icon v-if="isIconLeft" :icon="icon"></font-awesome-icon>
    <span><slot /></span>
    <font-awesome-icon v-if="isIconRight" :icon="icon"></font-awesome-icon>
  </component>
</template>

<script>
import ThemeProps from "@/components/mixins/ThemeProps";
const nativeTypes = ["btn", "button", "submit", "reset"];
const availableTags = ["button", "a", "input", "router-link", "nuxt-link", "n-link", "NuxtLink", "NLink"];
export default {
  mixins: [ThemeProps],
  inheritAttrs: false,
  props: {
    icon: {
      type: String,
      required: false,
      default: null,
    },
    iconPosition: {
      type: String,
      required: false,
      default: "left",
    },
    rounded: {
      type: String,
      required: false,
      default: "medium",
    },
    outline: {
      type: Boolean,
      required: false,
      default: false,
    },
    nativeType: {
      type: String,
      default: "btn",
      validator: value => nativeTypes.includes(value),
    },
    tag: {
      type: String,
      default: "Button",
      validator: value => availableTags.includes(value),
    },
  },
  computed: {
    isIconLeft() {
      return this.icon && this.iconPosition === "left";
    },
    isIconRight() {
      return this.icon && this.iconPosition === "right";
    },
    getBtnEffects() {
      const classes = [];
      classes.push("border-" + this.themeColor);
      classes.push("bg-" + this.themeBgColor);
      classes.push("hover:bg-" + this.themeBgColor);
      classes.push("text-" + this.themeColor);
      return classes.join(" ");
    },
  },
};
</script>
