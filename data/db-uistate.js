import UIState from "~/data/models/UIState";

export function initUIState(database) {
  database.register(UIState);
}
