<template>
  <div class="xl:w-screen xl:max-w-screen-xl xl:mx-auto lg:space-y-lg space-y-sm">
    <div class="flex flex-row" :class="[left ? 'justify-end' : '', right ? 'justify-start' : '']">
      <div class="flex items-center p-xs" :class="[textcolor, bgcolor, left ? 'rounded-l-full' : '']">
        <div class="flex-1 picture-fit md:h-full md:w-48 max-h-80 md:block hidden"></div>
      </div>
      <div class="flex flex-col w-full p-xs" :class="[textcolor, bgcolor]">
        <div class="flex-1 flex w-full flex-col space-y-400" :class="[textcolor, bgcolor]">
          <div>
            <slot name="title"></slot>
          </div>
          <div class="w-full font-normal">
            <slot name="body"></slot>
          </div>
        </div>
      </div>
      <div class="flex items-center p-xs" :class="[textcolor, bgcolor, right ? 'rounded-r-full' : '']">
        <div class="flex-1 picture-fit md:h-full md:w-48 max-h-80 md:block hidden"></div>
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
