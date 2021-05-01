const jwt = require("jsonwebtoken");

const Sessions = require("../models/Sessions");

const { JWT_SECRET } = require("../config");

const getUserId = (req) => {
  try {
    if (req.headers.authorization) {
      const { authorization } = req.headers;

      if (!RegExp(/^Bearer /).test(authorization))
        throw new Error("UnauthorizedError");
      const token = authorization.replace(/^Bearer /, "");

      const { sub: userId } = jwt.verify(token, JWT_SECRET);
      return userId;
    } else if (req.query.id) {
      const { id } = req.query;
      const user = Sessions.findByUuid(id);
      if (!user.userId) throw new Error("UnauthorizedError");
      return user.userId;
    }
  } catch (err) {
    console.error(err);
  }
  return undefined;
};

const auth = (req, res, next) => {
  const userId = getUserId(req);
  if (!userId) {
    return res.status(403).send({
      message:
        "Forbidden. This means you are either missing the JWT / UUID token, the token is not being passed the right way or your token is not correct.",
    });
  } else next();
};

module.exports = { getUserId, auth };
