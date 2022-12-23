import {reducers} from "./combineReducers2"
import { createStore } from "redux";

// export const store = {
//     location:locationReducer

// }
const store = createStore(
    reducers,
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  export default store;
  