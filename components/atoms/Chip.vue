<template>
  <component
    :is="tag"
    :type="nativeType"
    v-bind="$attrs"
    :theme-color="themeColor"
    :theme-bg-color="themeBgColor"
    :class="getBtnEffects"
    class="rounded-medium inline-flex justify-center items-center shadow-100 hover:shadow-200 active:shadow-300 space-x-200 py-100 px-100 font-normal text-xs"
    @click="$emit('click', $event)"
  >
    <font-awesome-icon v-if="isIconLeft" :icon="icon"></font-awesome-icon>
    <span><slot /></span>
    <font-awesome-icon v-if="isIconRight" :icon="icon"></font-awesome-icon>
  </component>
</template>

<script>
import ThemeProps from "@/components/mixins/ThemeProps";
const nativeTypes = ["span", "div", "btn", "button"];
const availableTags = [
  "span",
  "div",
  "button",
  "a",
  "input",
  "router-link",
  "nuxt-link",
  "n-link",
  "NuxtLink",
  "NLink",
];
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
      default: "div",
      validator: value => nativeTypes.includes(value),
    },
    tag: {
      type: String,
      default: "div",
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
      classes.push("border-" + this.themeColor + "-300");
      if (!this.outline) classes.push("bg-" + this.themeBgColor + "");
      classes.push("text-" + this.themeColor);
      return classes.join(" ");
    },
  },
};
</script>
