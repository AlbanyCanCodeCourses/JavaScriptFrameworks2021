const { expect } = require("chai");

const Sessions = require("../../models/Sessions");

describe("models/Sessions.js", () => {
  describe("insert()", () => {
    it("should return the uuid after it inserts a row", () => {
      const uuid = Sessions.insert("2725");
      expect(uuid).to.be.a("string").to.be.ok;
    });
  });
  describe("findByUuid()", () => {
    it("should return the matching session if it exists", () => {
      const uuid = Sessions.insert("2725");
      const session = Sessions.findByUuid(uuid);
      expect(session).to.deep.equal({
        userId: "2725",
        uuid,
      });
    });

    it("should return undefined if no user is found", () => {
      const user = Sessions.findByUuid("1234");
      expect(user).to.equal(undefined);
    });
  });
});
