const { generateRandomString } = require("./util.js");

/**
 * Typically, the JWT secret would be within a vault or encrypted in environmental variables.
 * Also, it should not be generated every time the application starts up.
 * However, to make it easy for anyone to start this portfolio piece,
 * and to avoid being flagged as not secure by GitHub,
 * I generating the JWT token so that it is not hardcoded.
 */
const JWT_SECRET = generateRandomString();

module.exports = {
  JWT_SECRET,
};
