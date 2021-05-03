const express = require("express");
const cors = require("cors");

const categories = require("./categories.json");

const app = express();
app.use(cors());
app.use(express.json());

/**
 * Content-Type verifier
 */
app.use((req, res, next) => {
  if (
    req.originalUrl === "/" ||
    req.originalUrl === "/nominees" ||
    req.originalUrl === "/complete"
  )
    return next();
  const { headers } = req;
  if (
    !headers["content-type"] ||
    headers["content-type"].toLowerCase().indexOf("application/json") < 0
  ) {
    console.log(headers);
    return res.status(415).send({
      message:
        "Could not read request. Requires the 'Content-Type: application/json' header",
    });
  }
  next();
});

/**
 * Logs request
 */
app.use((req, res, next) => {
  console.log(`Received request for ${req.originalUrl}`);
  next();
});

/**
 * Error handler
 */
app.use((err, req, res, next) => {
  if (err) {
    console.error(err.stack);
    return res.status(400).send({ message: "Bad request" });
  }
  next();
});

/**
 * So you see the loading symbol,
 * I am delaying the response
 * @see https://www.npmjs.com/package/sleep
 */
const msleep = (n) => {
  Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, n);
};

const methodNotAllowed = (req, res) => {
  res.status(405).send({
    message: "Method Not Allowed",
  });
};

app.all("/", (req, res) => {
  const text = `<!DOCTYPE html><html><head></head><body><h1>Its running!</h1><table><thead><th>Method</th><th>URL</th><th>Example Request</th></thead><tbody>
    <tr><td>GET</td><td>http://localhost:7000/nominees</td><td></td></tr>
    <tr><td>POST</td><td>http://localhost:7000/vote</td><td><code>{"categoryId": "1", "nomineeIndex": 0}</code></td></tr>
    <tr><td>POST</td><td>http://localhost:7000/complete</td><td></td></tr>
    </tbody></table></body></html>`;
  res.send(text);
});

app.get("/api/nominees", (req, res) => {
  msleep(500);
  res.send({
    message: "Success",
    categories,
  });
});
app.all("/api/nominees", methodNotAllowed);

app.post("/api/vote", (req, res) => {
  msleep(100); // Originally 100
  const { body } = req;
  if (isNaN(body.categoryId) || isNaN(body.nomineeIndex))
    return res.status(400).send({
      message: "Missing parameters. Need categoryId and nomineeIndex",
    });

  res.send({
    message: "Success",
  });
});
app.all("/api/vote", methodNotAllowed);

app.post("/api/complete", (req, res) => {
  msleep(500);
  res.send({
    message: "Success",
  });
});
app.all("/api/complete", methodNotAllowed);

const server = app.listen(7000, () => {
  console.log(
    `\nYour server is running on http://localhost:${server.address().port}/`
  );
  console.log(`\nPress ctrl+c to stop\n`);
});
