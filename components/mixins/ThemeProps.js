export default {
  props: {
    themeColor: {
      type: String,
      default: "accent_dark-700",
    },
    themeBgColor: {
      type: String,
      default: "accent_light-100",
    },
    themeBorderColor: {
      type: String,
      default: "neutral_light",
    },
    outline: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  computed: {
    textcolor() {
      return "text-" + this.themeColor;
    },
    bgcolor() {
      if (this.themeBgColor && !this.outline) return "bg-" + this.themeBgColor;
      else return "";
    },
    bordercolor() {
      if (this.themeBorderColor && this.outline) return "border-" + this.themeBorderColor;
      else if (this.themeBgColor && this.outline) return "border-" + this.themeBgColor;
      else return "";
    },
  },
};
