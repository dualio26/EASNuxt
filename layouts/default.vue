<template>
  <div>
    <PageHeader
      small-logo="/images/brand-brand-BrandLogos-LogoSmall.svg"
      logo="/images/brand-brand-BrandLogos-LogoLeft.svg"
      large-logo="/images/brand-brand-BrandLogos-LogoLeft.svg"
      alt="Envionmental Accounts Services Logo"
    />
    <Nuxt />
  </div>
</template>
<script>
import loadData from "@/data/mixins/loadData";
// import UIState from '@/data/models/UIState'
import PageHeader from "@/components/organisims/PageHeader";
export default {
  components: {
    PageHeader,
  },
  mixins: [loadData],
  data() {
    return {};
  },
  created() {
    // UIState.create({ data: { id: 1 } }) // default initialise, single instance database
    this.loadData(this.$store);
  },
};
</script>
