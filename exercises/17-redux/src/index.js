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
import App from "./components/AppContainer";
import reducer from './reducer';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(reducer);// We will talk about the container later

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
    <App /> 
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
