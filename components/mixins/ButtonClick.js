import ClickOutside from "vue-click-outside";
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  methods: {
    toggleButtonClick() {
      this.isOpen = !this.isOpen;
    },
    hideButtonClick() {
      this.isOpen = false;
    },
  },

  mounted() {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el;
  },

  // do not forget this section
  directives: {
    ClickOutside,
  },
};
