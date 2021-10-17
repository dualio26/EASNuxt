<template>
  <div :class="[textcolor, bgcolor]" class="xl:w-screen xl:max-w-screen-xl xl:mx-auto lg:space-y-lg space-y-sm">
    <slot></slot>
  </div>
</template>

<script>
import ThemeProps from "@/components/mixins/ThemeProps";
export default {
  mixins: [ThemeProps],
};
</script>
