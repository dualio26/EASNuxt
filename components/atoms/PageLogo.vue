<template>
  <div class="flex-shrink-0">
    <a href="/">
      <img
        v-if="smallLogo !== null"
        class="xxl:hidden xl:hidden lg:hidden md:hidden block h-100 w-auto"
        :src="smallLogoSrc"
        :alt="alt"
      />
      <img v-if="logo !== null" class="lg:hidden md:block sm:block h-12 w-auto" :src="logoSrc" :alt="alt" />
      <img v-if="largeLogo !== null" class="hidden lg:block h-20 w-auto" :src="largeLogoSrc" :alt="alt" />
    </a>
  </div>
</template>

<script>
export default {
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
  data() {
    return {
      logoSrc: this.logo,
      smallLogoSrc: this.smallLogo,
      largeLogoSrc: this.largeLogo,
    };
  },
};
</script>
