<template>
  <div class="xl:w-screen xl:max-w-screen-xl xl:mx-auto lg:space-y-lg space-y-sm">
    <div class="flex flex-row" :class="[left ? 'justify-end' : '', right ? 'justify-start' : '']">
      <div v-if="left" class="flex items-center p-xs rounded-l-full" :class="[textcolor, bgcolor]">
        <div class="flex-1 picture-fit w-1 h-full">
          <slot name="picture"></slot>
        </div>
      </div>
      <div class="flex flex-col items-end px-lg" :class="[textcolor, bgcolor]">
        <slot name="title"></slot>
      </div>
      <div v-if="right" class="flex items-center p-xs rounded-r-full" :class="[textcolor, bgcolor]">
        <div class="flex-1 picture-fit w-1 h-full">
          <slot name="picture"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ThemeProps from "@/components/mixins/ThemeProps";
export default {
  components: {},
  mixins: [ThemeProps],
  props: {
    left: {
      type: Boolean,
      required: false,
      default: false,
    },
    right: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>
