export default {
  methods: {
    loadData(store) {
      const UIState = store.$db().model("uistate");
      UIState.create({ data: { id: 1 } }); // default initialise, single instance database
      console.log("loadData");
    },
  },
};
