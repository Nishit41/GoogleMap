import { combineReducers } from "redux";
import { locationReducer } from "./Reducer";

export const reducers = combineReducers({
    allLocations: locationReducer,
});