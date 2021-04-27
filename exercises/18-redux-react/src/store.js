import { createStore } from "redux";
import reducer from "./reducer";

/**
 * Allowing you to see Redux actions in your dev tools.
 * @see https://github.com/zalmoxisus/redux-devtools-extension#usage
 */
const store = createStore(
  reducer /* preloadedState, */,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
