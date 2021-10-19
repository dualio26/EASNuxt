<template>
  <div class="flex-1 flex sm:items-stretch sm:justify-start">
    <div class="flex items-center">
      <PageLogo class="h-8" :small-logo="smallLogo" :logo="logo" :large-logo="largeLogo" :alt="alt" />
    </div>
    <div class="flex w-full justify-end">
      <div class="flex hidden md:block sm:ml-6 justify-end font-serif text-display-4">
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
import PageLogo from "@/components/atoms/PageLogo";
export default {
  components: {
    PageLogo,
  },
  props: {
    smallLogo: {
      type: String,
      default: null,
      required: false,
    },
    logo: {
      type: String,
      default: null,
      required: false,
    },
    largeLogo: {
      type: String,
      default: null,
      required: false,
    },
    alt: {
      type: String,
      default: "",
      required: false,
    },
  },
};
</script>
