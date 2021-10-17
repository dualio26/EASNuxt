<template>
  <ul aria-label="Site Pages" role="menubar">
    <MenuItem to="/" text="Home" />
    <MenuItem to="/carbonfootprint" text="Footprint" />
    <MenuItem to="/carboncredits" text="Credits" />
  </ul>
</template>

<script>
import MenuItem from "@/components/atoms/MenuItem";
export default {
  components: {
    MenuItem,
  },
};
</script>
