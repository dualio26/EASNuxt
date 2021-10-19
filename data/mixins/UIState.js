export default {
  computed: {
    uiStateModel() {
      let result = null;
      if (this.$store && this.$store.$db() && this.$store.$db().model("uistate")) {
        result = this.$store.$db().model("uistate");
      }
      return result;
    },
    uiState() {
      let result = null;
      if (this.uiStateModel) {
        result = this.uiStateModel.query().first();
      }
      return result;
    },
    isMobileMenuOpen() {
      return this.uiState && this.uiState.mobileMenuOpen;
    },
  },
  methods: {
    toggleMobileMenu() {
      if (this.uiState && this.uiState.mobileMenuOpen !== "undefined") {
        this.uiStateModel.update({
          id: 1,
          mobileMenuOpen: !this.uiState.mobileMenuOpen,
        });
      }
    },
    closeMobileMenu() {
      if (this.uiState && this.uiState.mobileMenuOpen !== "undefined" && this.uiState.mobileMenuOpen) {
        this.uiStateModel.update({
          id: 1,
          mobileMenuOpen: false,
        });
      }
    },
  },
};
