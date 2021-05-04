import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducer";
import thunk from "redux-thunk";

const { NODE_ENV } = process.env;

/**
 * Sets up Redux dev tools in your development environment only.
 * Chrome: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
 * Firefox: https://addons.mozilla.org/en-US/firefox/addon/reduxdevtools/
 * @see https://github.com/zalmoxisus/redux-devtools-extension#usage
 */
const composeEnhancers =
  NODE_ENV === "development"
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
    : compose;

const middleware = [thunk];

const store = createStore(
  reducer,
  /* preloadedState, */ composeEnhancers(applyMiddleware(...middleware))
);

export default store;
