const express = require("express");
const jwt = require("jsonwebtoken");

const Users = require("../models/Users");

const methodNotAllowedError = require("../errors/methodNotAllowed");

const { JWT_SECRET, JWT_EXPIRY_IN_MILLISECONDS } = require("../config");

const router = express.Router();

router
  .route("/")
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

      const token = jwt.sign({ sub: user.id.toString() }, JWT_SECRET, {
        expiresIn: `${JWT_EXPIRY_IN_MILLISECONDS}ms`,
      });
      return res.status(200).send({
        message: "You did it! Success!",
        token,
      });
    }, 500);
  })
  .all(methodNotAllowedError);

module.exports = router;
