<template>
  <!-- Mobile menu, show/hide based on menu state. -->
  <div v-show="isOpen" id="mobile-menu" class="flex justify-end px-2 pt-2 pb-3">
    <slot />
  </div>
</template>

<script>
import UIState from "@/data/mixins/UIState";
export default {
  mixins: [UIState],
  computed: {
    isOpen() {
      return this.isMobileMenuOpen;
    },
  },
};
</script>
