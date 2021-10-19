<template>
  <footer id="footer" role="contentinfo">
    <div class="flex p-md">
      <div class="flex flex-col w-1/5 space-y-md">
        <slot name="picture"></slot>
        <slot name="notice"></slot>
      </div>
      <div class="grid grid-cols-3 gaps-md w-3/5">
        <slot name="inner"></slot>
      </div>
      <div class="flex flex-col space-y-md">
        <div>
          <slot name="toolbar"></slot>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  components: {
  },
};
</script>
