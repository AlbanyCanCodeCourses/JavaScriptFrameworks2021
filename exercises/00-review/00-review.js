/**
 * Loop through the array using a for loop (or for ... of loop) and return the highest number
 * @param  { array }
 * @returns { number } the highest number that was in the array
 * @example
 * highestNumber([1, 10, 2, 3, 4]) // 10
 * highestNumber([-1, -5, -4]) // -1
 *
 **/
function highestNumber(array) {}

/**
 * Combine an array by using the spread operator
 * @param  {array} array1
 * @param  {array} array2
 * @returns {array} an array that combines array1 and array2
 * @example
 * combineArray(['Japan','China','India'], ['USA','UK']) // ['Japan','China','India','USA','UK']
 **/

function combineArray(array1, array2) {}

/***
 * Use sets to remove duplicate elements from an array
 * @return {array}
 */

function removeDuplicates() {
  let numbers = [2, 3, 4, 4, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 5, 32, 3, 4, 5]; // You can change this line

  /** Return the an array of unique values */
  return;
}

function createStudentObject() {
  // Do not change student here
  let student = {
    firstName: "",
    lastName: "",
    skills: [],
  };
  // Add code here
  return student;
}

/**
 * Combine two objects into one
 * @param  {object} obj1
 * @param  {object} obj2
 * @return {object} obj1 and obj2 combined
 */

function combineObject(obj1, obj2) {}

/**
 * Please use the higher order function map to solve this problem.
 * Multiplies each value in an array by two
 * @param {array} arr an array of numbers e.g. [1, 3, 5]
 * @returns {array} new array, with each value doubled e.g. [2, 5, 10]
 */

const doubleValues = (arr) => {};

/**
 * * Please use the higher order function filter to solve this problem.
 * Find and return only the even numbers in an array
 * @param {array} arr
 * @returns {array} a new array that only includes the even numbers
 * @example
 *   onlyEvenValues([1,2,3]) // [2]
 *   onlyEvenValues([5,1,2,3,10]) // [2,10]
 */
function onlyEvenValues(arr) {}

/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.
Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

/**
 * Remove all vowels from within a string
 * @param {string} str
 * @returns {string} string with the vowels removed
 * @example
 *  removeVowels('Elie') // ('l')
 *  removeVowels('TIM') // ('tm')
 *  removeVowels('ZZZZZZ') // ('zzzzzz')
 */
function removeVowels(str) {}

/**
 *  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator
 * 
 * 
 * Refactor This  If Else Statement to use the ternary operator
 *      let hungry = true;
        if (hungry) {
           console.log('Go eat something.');
          } else {
            console.log('Keep coding!');
         }
 */

function isHungry() {}

/***
 *  Use destructing to solve this problem
 *  @example https://slides.com/accjavascript/deck-10#/41
 *
 *  Function should return tomorrow's temperature
 *
 */

const AVG_TEMPERATURES = {
  today: 77.5,
  tomorrow: 79,
};

function getTempOfTmrw(avgTemperatures) {
  // change code below this line;
  const {} = AVG_TEMPERATURES; // change this line
  // change code above this line
  return tempOfTomorrow;
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
function addItems(arr) {}
