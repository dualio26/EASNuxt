<template>
  <div class="absolute top-0 right-0 flex items-center md:hidden">
    <!-- Mobile menu button-->
    <button
      type="button"
      class="
        inline-flex
        items-center
        justify-center
        p-2
        rounded-md
        hover:text-accent_green_3-500 hover:bg-gray-700
        focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
      "
      aria-controls="mobile-menu"
      aria-expanded="false"
      @click="handleClick"
    >
      <span class="sr-only">Open main menu</span>
      <svg
        v-show="!isOpen"
        :class="!isOpen ? 'block' : 'hidden'"
        class="block h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
      </svg>
      <svg
        v-show="isOpen"
        :class="isOpen ? 'block' : 'hidden'"
        class="h-6 w-6"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
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
  methods: {
    handleClick() {
      console.log("Mobile button click");
      console.log(this.isMobileMenuOpen);
      this.toggleMobileMenu();
    },
  },
};
</script>
