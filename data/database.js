import { Database } from "@vuex-orm/core";
import { initUIState } from "~/data/db-uistate";

const database = new Database();

initUIState(database);

export default database;
