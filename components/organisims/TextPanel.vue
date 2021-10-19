<template>
  <BasePanel v-bind="$attrs" class="flex mx-700 bg-light_alpha-600">
    <TextContent class="w-full">
      <template #lead>
        <div class="flex justify-left">
          <slot name="lead"></slot>
        </div>
      </template>
      <template #title>
        <div class="flex justify-left">
          <slot name="title"></slot>
        </div>
      </template>
      <template #subtitle>
        <div class="flex justify-left">
          <slot name="subtitle"></slot>
        </div>
      </template>
      <template #body>
        <slot name="body"></slot>
      </template>
      <template #inner>
        <slot name="inner"></slot>
      </template>
      <slot></slot>
    </TextContent>
  </BasePanel>
</template>

<script>
import BasePanel from "@/components/organisims/BasePanel";
import TextContent from "@/components/molecules/TextContent";
export default {
  components: {
    BasePanel,
    TextContent,
  },
};
</script>
