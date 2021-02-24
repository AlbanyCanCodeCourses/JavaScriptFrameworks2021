/**
 * Refactor this to use ES6 Modules with default exports
 * @see https://slides.com/accjavascript/webpack-npm#/10
 * 1. Create a new file in the same folder as this file called "Greeter.js"
 * 2. Copy the Greeter function below and paste it into the new file "Greeter.js"
 * 3. Delete the Greeter function below
 * 4. Export the Greeter function from "Greeter.js" and import the function in this file
 */
import Greeter from "./Greeter";

/**
 * ES6 Modules Reference:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * @see https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 */

/**
 * Ignore this. It is for the tests.
 */

export const functionsToTest = (() => {
  let greeter;
  try {
    greeter = Greeter;
  } catch (e) {
    // Normally it is bad practice to not handle the error.
    // However, I am just using try ... catch to get the unit test to work
  }
  return {
    greeter,
  };
})();
