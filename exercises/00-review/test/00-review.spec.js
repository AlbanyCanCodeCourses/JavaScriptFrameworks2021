const { expect } = require("chai");
const {
  functionsToTest,
  highestNumber,
  combineArray,
  combineObject,
  onlyEvenValues,
  removeVowels,
  getIsHungryText,
  getTempOfTmrw,
  addItems,
  removeDuplicates,
} = require("../00-review");

const path = require("path");
const fs = require("fs");
const reviewQuestinonsPath = path.resolve(__dirname, "../00-review.js");
const greeterFilePath = path.resolve(__dirname, "../Greeter.js");

describe("Greeter", () => {
  it('should have a new file named "Greeter.js" inside of "exercises/00-review/". (NOTE that this is case sensitive)', () => {
    expect(fs.existsSync(greeterFilePath)).to.be.true;
  });
  it('"Greeter.js" should have the Greeter function inside of it', () => {
    const fileContents = fs.readFileSync(greeterFilePath, "utf8");
    expect(fileContents).to.match(/function\s*Greeter/);
  });
  it('"Greeter.js" should export the Greeter function as default', () => {
    const fileContents = fs.readFileSync(greeterFilePath, "utf8");
    expect(fileContents).to.match(/export\s*default\s*Greeter/);
  });
  it('"es6-modules.js" should import the Greeter function from "Greeter.js"', () => {
    const fileContents = fs.readFileSync(reviewQuestinonsPath, "utf8");
    expect(fileContents).to.match(/import\s*Greeter\s*from/);
  });
  it("Greeter function should work, even after you move it to a different file", () => {
    expect(functionsToTest.greeter).to.be.a("function");
    const say = functionsToTest.greeter();
    expect(say.hello).to.be.a("function");
    const greeting = say.hello("Twinkle Toes");
    expect(greeting).to.equal("Hello Twinkle Toes!");
  });
});

describe("Review", () => {
  it("Return the highest number in the array", () => {
    expect(highestNumber([1, 10, 2, 3, 4])).to.equal(10);
    expect(highestNumber([-1, -5, -4])).to.equal(-1);
  });

  it("it should merge both arrays", () => {
    const combinedArray = combineArray(["HTML"], ["CSS"]);
    expect(combinedArray).to.have.all.members(["HTML", "CSS"]);
  });

  it("it should combine two objects and return a single object", () => {
    const obj1 = {
      firstName: "Clark",
    };
    const obj2 = {
      lastName: "Kent",
    };
    const combinedObj = combineObject(obj1, obj2);
    expect(combinedObj).to.deep.equal({
      firstName: "Clark",
      lastName: "Kent",
    });
  });

  it("should return only even numbers", () => {
    expect(onlyEvenValues([1, 2, 3])).to.have.all.members([2]);
    expect(onlyEvenValues([5, 1, 2, 3, 10])).to.have.all.members([2, 10]);
  });

  it("tests doubledValues to see if the function returns an array that doubling every value in the array", () => {
    const doubledValues = doubleValues([2, 3, 4], (number) => {
      return number * 2;
    });
    expect(doubledValues).to.have.all.members([4, 6, 8]);
  });

  it("removes all vowels from the string", () => {
    expect(removeVowels("Elie")).to.equal("l");
    expect(removeVowels("TIM")).to.equal("tm");
  });

  it("it converts an if else statement to use a ternary expression", () => {
    const getIsHungryTextString = getIsHungryText.toString().split(" ");

    expect(getIsHungryTextString.includes("?")).to.be.true;
    expect(getIsHungryTextString.includes(":")).to.be.true;

    expect(getIsHungryText()).to.equal("Keep coding!");
  });

  it("should use destructuring and return the right values", () => {
    expect(getTempOfTmrw()).to.equal(
      "Today's temperature is 77.5.\nTomorrow's temperature is 79"
    );
  });

  it("should use reduce as the method to solve the problem and sum of all the values inside the array", () => {
    expect(addItems([1, 5, 6])).to.equal(12);
  });

  it("should remove duplicates from the array", () => {
    expect(removeDuplicates([1, 1, 1, 2, 2, 5, 5])).to.have.all.members([
      1,
      2,
      5,
    ]);
  });
});
