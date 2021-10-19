<template>
  <component :is="getNavList()" />
</template>

<script>
import NavState from "@/components/mixins/NavState";
import EASNavigationItemList from "@/components/app/EASNavigationItemList";
const mapThemeToMenu = {
  HOME: "EASNavigationItemList",
};
export default {
  components: {
    EASNavigationItemList,
  },
  mixins: [NavState],
  methods: {
    getNavList() {
      let cpath = this.currentPathTheme.toUpperCase();
      let menu = "EASNavigationItemList";
      while (cpath.length) {
        if (cpath in mapThemeToMenu) {
          menu = mapThemeToMenu[cpath];
          cpath = "";
        }
        cpath = cpath.split("/").slice(0, -1).join("/");
      }
      return menu;
    },
  },
};
</script>
