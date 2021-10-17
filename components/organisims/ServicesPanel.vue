<template>
  <div class="flex flex-row h-full mx-200" :class="[left ? 'justify-end' : '', right ? 'justify-start' : '']">
    <div v-if="left" class="flex items-center p-xs rounded-l-full md:block hidden" :class="[textcolor]">
      <div class="flex-1 picture-fill md:mr-900 mr-0 md:h-full lg:max-w-64 max-w-32 max-h-80 md:block hidden">
        <slot name="picture"></slot>
      </div>
    </div>
    <div class="flex flex-col p-xs md:w-6/12-screen" :class="[textcolor]">
      <div class="flex-1 flex flex-col space-y-400">
        <div>
          <slot name="title"></slot>
        </div>
        <div class="prose font-normal" :class="[textcolor]">
          <slot name="body"></slot>
        </div>
      </div>
    </div>
    <div v-if="right" class="flex items-center p-xs rounded-r-full md:block hidden" :class="[textcolor]">
      <div class="flex-1 picture-fit md:h-full max-w-80 max-h-80 md:block hidden">
        <slot name="picture"></slot>
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
