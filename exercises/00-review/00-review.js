/**
 *  Return the highest number in the array
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 10, 2, 3, 4]) // 10
 * highestNumber([-1, -5, -4]) // -1
 *
 **/

function highestNumber(array) {
  let largestNum = array[0]
  for(let i = 0; i < array.length; i++){
    if (array[i] > largestNum){
      largestNum = array[i];
    }
  }
  return largestNum;
}

/**
 * Refactor this to use ES6 Modules with default exports
 * @see https://slides.com/accjavascript/webpack-npm#/10
 * 1. Create a new file in the same folder as this file called "Greeter.js"
 * 2. Copy the Greeter function below and paste it into the new file "Greeter.js"
 * 3. Delete the Greeter function below
 * 4. Export the Greeter function from "Greeter.js" and import the function in this file
 *
 * ES6 Modules Reference:
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import
 * @see https://developer.mozilla.org/en-US/docs/web/javascript/reference/statements/export
 */
import Greeter from "./Greeter.js";

/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

function combineArray(array1, array2) {
  let combArr = [...array1,...array2];
  return combArr;
}

/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

function combineObject(obj1, obj2) {
  let combObj = {...obj1,...obj2};
  return combObj;
}

/**
 * Please use the higher order function map to solve this problem.
 * Multiplies each value in an array by two
 * @param {array} arr an array of numbers e.g. [1, 3, 5]
 * @returns {array} new array, with each value doubled e.g. [2, 5, 10]
 */

const doubleValues = (arr) => {
  let dblVal = arr.map(x => x * 2);
  return dblVal;
}

/**
 * * Please use the higher order function filter to solve this problem.
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */
function onlyEvenValues(arr) {
  let evenVal = arr.filter(x => x%2 == 0);
  return evenVal;
};

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

/**
 * Remove all vowels from within a string and lower case each letter
 * @param {string} str
 * @returns {string} string with the vowels removed
 * @example
 *  removeVowels('Elie') // ('l')
 *  removeVowels('TIM') // ('tm')
 *  removeVowels('ZZZZZZ') // ('zzzzzz')
 */
function removeVowels(str) {
  let word = str.toLowerCase();
  return word.replace(/[aeiou]/g,"");
}

/**
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * @returns {string}
 *
 */

function getIsHungryText() {
  //don't change this variable
  let isStomachEmpty = false;
  /* convert this if else statement into a ternary expression */

  // let isHungry;
  // if (isStomachEmpty) {
  //   isHungry = "Go eat something.";
  // } else {
  //   isHungry = "Keep coding!";
  // }

  
  return (isStomachEmpty ? "Go eat something" : "Keep coding!");
}

/**
 * Refactor this to use destructuring
 * @example https://slides.com/accjavascript/deck-10#/41
 * @return Function should return tomorrow's temperature
 */

function getTempOfTmrw() {
  // Do not change me
  const AVG_TEMPERATURES = {
    today: 77.5,
    tomorrow: 79,
  };

  // Start of what you should change
  const { today , tomorrow} = AVG_TEMPERATURES
  // End of what you should change
  return `Today's temperature is ${today}.\nTomorrow's temperature is ${tomorrow}`;
}

/**
 * Use reduce to solve this problem
 * Given an array of numbers, return the sum
 * @param {array} arr an array of numbers, e.g. `[1, 2, 3]`
 * @returns sum
 * @example
 *  addItems([1,5,6]) // 12
 *  addItems([1,-2,-3]) // -4
 */
function addItems(arr) {
  
  let sum = arr.reduce(( x, y) => {
    return x + y;
  }, 0);
return sum;
}

/**
 * @example
 * [1,1,2,2,3,3] // [1,2,3]
 * @param {array} arr
 * remove duplicates elements from an array
 *  hint you can use sets (optional) as a way to solve this problem.
 *  https://slides.com/accjavascript/deck-10#/24
 * @return {array}
 *
 */

function removeDuplicates(array) {
  /** Return the an array of unique values */
  let uniqueArr = [...new Set(array)];
  return uniqueArr;
}

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

module.exports = {
  highestNumber,
  combineArray,
  combineObject,
  doubleValues,
  removeVowels,
  getIsHungryText,
  getTempOfTmrw,
  addItems,
  removeDuplicates,
};
