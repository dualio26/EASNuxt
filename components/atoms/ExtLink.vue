<template>
  <a v-bind="$attrs" class="link-primary cursor-pointer inline" @click.self.stop>
    <slot /> <font-awesome-icon icon="external-link-alt"></font-awesome-icon>
  </a>
</template>

<script>
export default {};
</script>
