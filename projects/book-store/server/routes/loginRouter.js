const express = require("express");
const jwt = require("jsonwebtoken");

const Users = require("../models/Users");
const Sessions = require("../models/Sessions");

const methodNotAllowedError = require("../errors/methodNotAllowed");

const { JWT_SECRET } = require("../config");

const router = express.Router();

router
  .route(["/jwt", "/uuid"])
  .post((req, res) => {
    // Slowing down so that you can see if the button has been disabled
    setTimeout(() => {
      const { username = undefined, password = undefined } = req.body;

      if (!username || !password) {
        return res.status(400).send({
          message:
            "Pst! You are missing something in your request. Do you have a 'Content-Type' header and is it 'application/json?' Are you sending JSON? Is the username and password a part of the request?",
        });
      }

      const user = Users.findByCredentials(username, password);
      if (!user)
        return res.status(401).send({
          message: "Unauthorized. Your username or password is not correct.",
        });

      if (req.originalUrl.includes("/jwt")) {
        const token = jwt.sign({ sub: user.id.toString() }, JWT_SECRET);
        return res.status(200).send({
          message: "You did it! Success!",
          token,
        });
      } else if (req.originalUrl.includes("/uuid")) {
        const uuid = Sessions.insert(user.id);
        return res.status(200).send({
          message: "You did it! Success!",
          uuid,
        });
      }
    }, 500);
  })
  .all(methodNotAllowedError);

module.exports = router;
