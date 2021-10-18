<template>
  <BaseCard v-bind="$attrs" class="flex pitcure-fill p-300 place-items-center">
    <slot></slot>
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/organisims/BaseCard";
export default {
  components: {
    BaseCard,
  },
};
</script>
