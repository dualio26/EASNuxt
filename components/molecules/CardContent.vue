<template>
  <div class="flex flex-col space-y-400 h-full">
    <div class="flex-none flex flex-col items-stretch space-y-100">
      <div v-if="hasLeadSlot" class="font-medium">
        <slot name="lead"></slot>
      </div>
      <div v-if="hasTitleSlot" class="font-medium">
        <slot name="title"></slot>
      </div>
      <div v-if="hasSubtitleSlot" class="font-medium">
        <slot name="subtitle"></slot>
      </div>
    </div>
    <div v-if="hasBodySlot || hasInnerSlot" class="flex flex-col font-normal">
      <slot v-if="hasBodySlot" name="body"></slot>
      <slot v-if="hasInnerSlot" name="inner"></slot>
    </div>
    <slot></slot>
  </div>
</template>

<script>
import HasSlots from "@/components/mixins/HasSlots";
export default {
  mixins: [HasSlots],
};
</script>
