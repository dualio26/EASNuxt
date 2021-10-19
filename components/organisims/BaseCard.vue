<template>
  <div
    :class="[
      'shadow-200',
      'overflow-hidden',
      'rounded-medium',
      textcolor,
      bgcolor,
      bordercolor,
      outline ? 'border-2' : '',
    ]"
    class="mb-100"
    @click="$emit('click', $event)"
  >
    <slot></slot>
  </div>
</template>

<script>
import ThemeProps from "@/components/mixins/ThemeProps";
export default {
  mixins: [ThemeProps],
  inheritAttrs: true,
};
</script>
