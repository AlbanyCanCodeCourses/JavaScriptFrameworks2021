/**
 * Complete the steps to get the store up and going.
 * This is mostly a copy and paste job. See the last snippet of code on this page:
 * @see https://codesandbox.io/s/gm0pn?file=/src/index.js:219-254
 * @see https://redux.js.org/tutorials/fundamentals/part-5-ui-react#passing-the-store-with-provider
 * You will need to import the reducer.js file.
 * It has already been started for you.
 */

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import App from "./components/AppContainer"; // We will talk about the container later
import reducer from "./reducer";
const store = createStore(reducer);

ReactDOM.render(
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>,
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
