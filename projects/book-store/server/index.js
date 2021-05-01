const express = require("express");
const session = require("express-session");
const { SESSION_SECRET, SESSION_EXPIRY_IN_MILLISECONDS } = require("./config");

const authRouter = require("./routes/authRouter");
const bookshelfRouter = require("./routes/bookshelfRouter");
const bookSearchRouter = require("./routes/bookSearchRouter");
const bookRouter = require("./routes/bookRouter");

const fileNotFoundError = require("./errors/fileNotFound");

const app = express();
app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: true,
    saveUninitialized: true,
    rolling: true,
    cookie: {
      httpOnly: true,
      sameSite: true,
      secure: false, // Normally, we would want this to be true
      maxAge: SESSION_EXPIRY_IN_MILLISECONDS,
    },
  })
);

// Error handler
app.use((err, req, res, next) => {
  if (err) {
    console.log(
      "Hey there. There could be a problem with your request or it could be that your instructors didn't write a fool-proof server. Check your request first. If you think it is OK, please copy and paste the stack trace below and send it your instructors."
    );
    console.error(err);
    console.log("\n");
    return res.status(500).send({
      message:
        "This is no fun. An unexpected error occurred that may be server related. Please take a look at the command line output.",
    });
  }
});

app.use("/api/bookshelf", bookshelfRouter);
app.use("/api/book/search", bookSearchRouter);
app.use("/api/book", bookRouter);
app.use("/api/", authRouter);

app.all("/", (req, res) => {
  const text =
    "Its running!\nTo use the API, please refer to the Project README.md.";
  res.send(text);
});

app.all("*", fileNotFoundError);

const server = app.listen(7000, () => {
  console.log(
    `\nYour server is running on http://localhost:${server.address().port}/`
  );
  console.log(`\nPress ctrl+c to stop\n`);
});
