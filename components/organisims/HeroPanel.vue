<template>
  <BasePanel v-bind="$attrs" class="flex space-x-400 xl:px-xl lg:px-lg sm:px-sm px-sm">
    <div class="flex flex-col py-md">
      <div class="flex-1 flex flex-col space-y-400">
        <div class="text-display-4">
          <slot name="title"></slot>
        </div>
        <div class="font-normal">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
    <div class="flex flex-col">
      <div class="flex-1 picture-fit md:h-full max-w-64 max-h-80 md:block hidden">
        <slot name="picture"></slot>
      </div>
    </div>
  </BasePanel>
</template>

<script>
import BasePanel from "@/components/organisims/BasePanel";
export default {
  components: {
    BasePanel,
  },
};
</script>
