import path from "path";

export default {
  computed: {
    isRouteActive() {
      return this.isCurrentPathActive(this.$route.path, this.to);
    },
    currentPathTheme() {
      return this.getCurrentThemeFromPath(this.$route.path);
    },
  },
  methods: {
    isCurrentPathActive(currentPath, thisPath) {
      let result = false;
      if (currentPath.endsWith("/")) currentPath = currentPath.substr(0, currentPath.length - 1);
      if (thisPath && thisPath.endsWith("/")) thisPath = thisPath.substr(0, thisPath.length - 1);
      result = result || currentPath === thisPath;
      result = result || path.dirname(currentPath) === thisPath;
      result = result || path.dirname(currentPath).startsWith(thisPath);
      // console.log(path.dirname(currentPath));
      return result;
    },

    getCurrentThemeFromPath(currentPath) {
      const p = currentPath.split("/").filter(item => item.length);
      let result = "home";
      if (p.length > 0) {
        result = p.join("/");
      }
      // console.log(p);
      return result;
    },
  },
};
