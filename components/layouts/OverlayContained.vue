<template>
  <div :class="[isDisabled ? 'opacity-50' : '']" class="h-full w-full z-10">
    <slot />
  </div>
</template>
<script>
export default {
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isDisabled: this.disabled,
    };
  },
};
</script>
