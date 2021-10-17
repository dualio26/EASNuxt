<template>
  <BaseCard v-bind="$attrs" class="flex flex-col space-x-400 p-300">
    <CardContent>
      <template #lead>
        <div class="flex justify-center">
          <slot name="lead"></slot>
        </div>
      </template>
      <template #title>
        <div class="flex justify-center">
          <slot name="title"></slot>
        </div>
      </template>
      <template #subtitle>
        <div class="flex justify-center">
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
    <div class="my-auto w-1/5">
      <Icon>
        <slot name="iconLeft"></slot>
        <slot name="iconRight"></slot>
      </Icon>
    </div>
  </BaseCard>
</template>

<script>
import BaseCard from "@/components/organisims/BaseCard";
import CardContent from "@/components/molecules/CardContent";
import Icon from "@/components/atoms/Icon";
export default {
  components: {
    BaseCard,
    CardContent,
    Icon,
  },
};
</script>
