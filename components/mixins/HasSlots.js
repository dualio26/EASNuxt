// The scopedSlots is not reactive
export default {
  computed: {
    hasDefaultSlot() {
      return !!this.$scopedSlots.default;
    },
    hasOverlaySlot() {
      return !!this.$scopedSlots.overlay;
    },
    hasPictureSlot() {
      return !!this.$scopedSlots.picture;
    },
    hasIconSlot() {
      return !!this.$scopedSlots.icon || this.hasIconLeftSlot || this.hasIconRightSlot;
    },
    hasIconRightSlot() {
      return !!this.$scopedSlots.iconRight;
    },
    hasIconLeftSlot() {
      return !!this.$scopedSlots.iconLeft;
    },
    hasLeadSlot() {
      return !!this.$scopedSlots.lead;
    },
    hasTitleSlot() {
      return !!this.$scopedSlots.title;
    },
    hasSubtitleSlot() {
      return !!this.$scopedSlots.subtitle;
    },
    hasBodySlot() {
      return !!this.$scopedSlots.body;
    },
    hasInnerSlot() {
      return !!this.$scopedSlots.inner;
    },
    hasTagGroupSlot() {
      return !!this.$scopedSlots.tagGroup;
    },
    hasTagGroupTopSlot() {
      return !!this.$scopedSlots.tagGroupTop;
    },
    hasToolbarSlot() {
      return !!this.$scopedSlots.toolbar;
    },
    hasTagGroupBottomSlot() {
      return !!this.$scopedSlots.tagGroupBottom;
    },
    hasActionsSlot() {
      return !!this.$scopedSlots.actions;
    },
    hasStatusSlot() {
      return !!this.$scopedSlots.status;
    },
  },
};
