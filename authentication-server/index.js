const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const path = require("path");
const fs = require("fs");

// You should never hardcode this in your repo in the real world!
const JWT_SECRET = "SECRET_SAUCE";
const USER_ID = "1234";
const USERNAME = "username";
const PASSWORD = "password";
const UUID = "341a2be5-9a98-4f08-8ac9-affd5c5cd1b0";

const fakeUsers = require("./fakeUsers.json");
const movies = require("./movies.json");

const app = express();

app.use(express.json());
app.use(cors());

// Error handler
app.use((err, req, res, next) => {
  if (err.name === "SyntaxError") {
    return res.status(400).send({
      message: "Pst! Are you sending valid JSON? Double-check your request.",
    });
  }

  console.log(
    "Hey there. There could be a problem with your request or it could be that your instructors didn't write a fool-proof server. Check your request first. If you think it is OK, please copy and paste the stack trace below and send it your instructors."
  );
  console.error(err);
  console.log("\n");
  return res.status(500).send({
    message:
      "This is no fun. An unexpected error occurred that may be server related. Please take a look at the command line output.",
  });
});

const methodNotAllowedError = (req, res) => {
  return res.status(405).send({
    message: `Method Not Allowed. Take a look your method. Hint: it should NOT be ${req.method}.`,
  });
};

app
  .route(["/jwt/login", "/cookie/login"])
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

      if (username === USERNAME && password === PASSWORD) {
        if (req.originalUrl === "/jwt/login") {
          const token = jwt.sign({ sub: USER_ID.toString() }, JWT_SECRET);
          return res.status(200).send({
            message: "You did it! Success!",
            token,
          });
        } else if (req.originalUrl === "/cookie/login") {
          return res.status(200).send({
            message: "You did it! Success!",
            uuid: UUID,
          });
        }
      }

      return res.status(401).send({
        message: "Unauthorized. Your username or password is incorrect.",
      });
    }, 500);
  })
  .all(methodNotAllowedError);

app
  .route(["/jwt/users", "/jwt/movies"])
  .get((req, res) => {
    try {
      const { authorization } = req.headers;
      if (!RegExp(/^Bearer /).test(authorization))
        throw new Error("UnauthorizedError");
      const token = authorization.replace(/^Bearer /, "");
      const { sub: decodedUserId } = jwt.verify(token, JWT_SECRET);
      if (decodedUserId !== USER_ID) throw new Error("UnauthorizedError");
    } catch (err) {
      return res.status(403).send({
        message:
          "Forbidden. This means you are either missing your JWT token or your token is not correct. Setup a header called 'Authorization' and set the value equal to 'Bearer mytoken'.",
      });
    }

    const content = req.originalUrl === "/jwt/movies" ? movies : fakeUsers;
    return res.send(content);
  })
  .all(methodNotAllowedError);

app
  .route(["/cookie/users", "/cookie/movies"])
  .get((req, res) => {
    try {
      const { id } = req.query;
      if (id !== UUID) throw new Error("UnauthorizedError");
    } catch (err) {
      return res.status(403).send({
        message:
          "Forbidden. This means you are either missing the UUID, the UUID is not being passed the right way or your UUID is not correct. Change your url so that it looks like this: 'http://localhost:7000/cookie/users?id=myuuid'.",
      });
    }

    const content = RegExp(/^\/cookie\/movies/).test(req.originalUrl)
      ? movies
      : fakeUsers;
    return res.send(content);
  })
  .all(methodNotAllowedError);

app.all("*", (req, res) => {
  const readMe = fs.readFileSync(path.join(__dirname, "/README.md"), {
    encoding: "UTF-8",
  });
  return res.set("Content-Type", "text/markdown; charset=UTF-8").send(readMe);
});

const server = app.listen(7000, () => {
  console.log(
    `\nYour server is running on http://localhost:${server.address().port}/`
  );
  console.log(`Press ctrl+c to stop.\n`);
});
