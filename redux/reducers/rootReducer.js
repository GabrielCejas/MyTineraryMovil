import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import userReducer from "./userReducer";
import itinerariesReducer from "./itinerariesReducer";

const rootReducer = combineReducers({
  citiesReducer,
  userReducer,
  itinerariesReducer,
});

export default rootReducer;
