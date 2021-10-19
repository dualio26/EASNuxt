<template>
  <div class="picture-fit flex w-auto justify-center object-cover lg:text-5xl text-xl text-neutral_light-300">
    <!-- class="picture-fit flex justify-center mx-auto object-cover lg:h-10 h-5 lg:text-5xl text-xl text-neutral_light-300" -->
    <slot name="iconLeft"></slot>
    <slot name="iconRight"></slot>
    <slot />
  </div>
</template>
