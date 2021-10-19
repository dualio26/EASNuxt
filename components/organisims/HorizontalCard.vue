<template>
  <BaseCard v-bind="$attrs" class="flex space-x-400">
    <div class="flex flex-row" :class="[left ? 'justify-end' : '', right ? 'justify-start' : '']">
      <div v-if="left" class="flex items-center p-xs rounded-full md:block hidden" :class="[textcolor, bgcolor]">
        <div
          class="flex-1 picture-fill overflow-hidden max-w-80 max-h-80 rounded-full md:block hidden border-8"
          :class="[bordercolor]"
        >
          <slot name="picture"></slot>
        </div>
      </div>
      <div class="flex flex-col p-xs md:w-5/12-screen" :class="[textcolor, bgcolor]">
        <div class="flex-1 flex flex-col">
          <CardContent class="space-y-400">
            <template #lead>
              <div class="flex justify-center">
                <slot name="lead"></slot>
              </div>
            </template>
            <template #title>
              <div class="flex justify-center font-serif text-center">
                <slot name="title"></slot>
              </div>
            </template>
            <template #subtitle>
              <div class="flex justify-center text-accent_green_3-600 text-center">
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
          </CardContent>
        </div>
        <div v-if="right" class="flex items-center p-xs rounded-full md:block hidden" :class="[textcolor, bgcolor]">
          <div
            class="
              flex-1
              picture-fill
              overflow-hidden
              md:h-full
              max-w-80 max-h-80
              rounded-full
              md:block
              hidden
              border-8
            "
            :class="[bordercolor]"
          >
            <slot name="picture"></slot>
          </div>
        </div>
      </div>
    </div>
  </BaseCard>
</template>

<script>
import ThemeProps from "@/components/mixins/ThemeProps";
import BaseCard from "@/components/organisims/BaseCard";
import CardContent from "@/components/molecules/CardContent";
export default {
  components: {
    BaseCard,
    CardContent,
  },
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
