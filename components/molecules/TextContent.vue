<template>
  <div class="space-y-400">
    <div class="flex flex-col items-stretch space-y-100">
      <div v-if="hasLeadSlot" class="font-medium text-xs">
        <slot name="lead"></slot>
      </div>
      <div v-if="hasTitleSlot" class="font-medium text-display-3">
        <slot name="title"></slot>
      </div>
      <div v-if="hasSubtitleSlot" class="font-medium text-h2">
        <slot name="subtitle"></slot>
      </div>
    </div>
    <div v-if="hasBodySlot || hasInnerSlot" class="font-normal">
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
