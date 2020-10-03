import { combineReducers } from "redux";
import { itemsReducer } from "./itemsReduser";

export const rootReducer = combineReducers({
  items: itemsReducer,
});
