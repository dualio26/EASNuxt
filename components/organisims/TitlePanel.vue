<template>
  <div class="relative p-0 m-0 z-0">
    <div class="absolute right-0 bottom-0 z-0">
      <!-- <img class="mb-20 opacity-100 z-0 h-1/4-screen" src="/images/reddcompass/illustration-GFOITreeCover.svg" /> -->
    </div>
    <BasePanel v-bind="$attrs" class="relative flex flex-col space-y-md justify-center z-10">
      <div v-if="isHomePath" class="flex px-48 justify-center text-accent_green-600 text-2xl md:text-4xl">
        <slot name="title"></slot>
      </div>
      <div v-if="isHomePath" class="flex px-48 justify-center text-accent_red-500 text-xl md:text-2xl">
        <slot name="subtitle"></slot>
      </div>
      <div v-if="isHomePath" class="font-normal">
        <slot name="text"></slot>
      </div>
      <div id="title-body" class="flex justify-center">
        <slot name="body"></slot>
      </div>
    </BasePanel>
  </div>
</template>

<script>
import NavState from "@/components/mixins/NavState";
import BasePanel from "@/components/organisims/BasePanel";
export default {
  components: {
    BasePanel,
  },
  mixins: [NavState],
  computed: {
    isHomePath() {
      return this.$route.path === "/home";
    },
  },
};
</script>
