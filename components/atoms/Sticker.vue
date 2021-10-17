<template>
  <OverlayEdge position="right">
    <template #overlay>
      <div
        :class="[iconSize, square ? '' : 'rounded-full']"
        class="m-100 p-100 shadow-400 bg-white picture-fit flex w-auto justify-center object-cover lg:text-5xl text-xl text-neutral_light-300 overflow-visible z-20"
      >
        <img v-if="!hasIconSlot" src="/images/openmrv/ComingSoon.svg" />
      </div>
    </template>
    <div class="rounded-medium bg-white">
      <OverlayContained :disabled="isDisabled">
        <slot />
      </OverlayContained>
    </div>
  </OverlayEdge>
</template>
<script>
import HasSlots from "@/components/mixins/HasSlots";
import OverlayEdge from "@/components/layouts/OverlayEdge";
import OverlayContained from "@/components/layouts/OverlayContained";
export default {
  components: {
    OverlayEdge,
    OverlayContained,
  },
  mixins: [HasSlots],
  props: {
    disabled: {
      type: Boolean,
      required: false,
      default: false,
    },
    iconSize: {
      type: String,
      required: false,
      default: "h-16",
    },
    square: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
  data() {
    return {
      isDisabled: this.disabled,
    };
  },
};
</script>
