const { expect } = require("chai");
const { functionsToTest } = require("../es6-modules");

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
