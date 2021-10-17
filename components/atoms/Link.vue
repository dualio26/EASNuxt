<template>
  <component :is="tag" :tag="nativeType" v-bind="$attrs" class="cursor-pointer" @click.native="$emit('click', $event)">
    <slot />
  </component>
</template>

<script>
const nativeTypes = ["div", "a"];
const availableTags = ["button", "a", "div", "input", "router-link", "nuxt-link", "n-link", "NuxtLink", "NLink"];
export default {
  inheritAttrs: false,
  props: {
    nativeType: {
      type: String,
      default: "div",
      validator: value => nativeTypes.includes(value),
    },
    tag: {
      type: String,
      default: "NuxtLink",
      validator: value => availableTags.includes(value),
    },
  },
};
</script>
