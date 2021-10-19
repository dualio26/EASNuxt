<template>
  <div class="relative rounded-medium z-0">
    <slot />
    <div class="w-100 h-100 top-0 left-0 absolute">
      <div
        :class="[
          hasOverlaySlot ? 'absolute top-0 z-20' : '',
          isLeft ? 'left-0' : '',
          isRight ? 'right-0' : '',
          insetSize,
        ]"
      >
        <div v-bind="$attrs">
          <slot name="overlay"> </slot>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import HasSlots from "@/components/mixins/HasSlots";
export default {
  mixins: [HasSlots],
  props: {
    position: {
      type: String,
      required: false,
      default: "left",
    },
    insetSize: {
      type: String,
      required: false,
      default: "-mt-300 -mr-300",
    },
  },
  computed: {
    isLeft() {
      return this.hasOverlaySlot && this.position === "left";
    },
    isRight() {
      return this.hasOverlaySlot && this.position === "right";
    },
  },
};
</script>
