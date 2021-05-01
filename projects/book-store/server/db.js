const sqlite3 = require("sqlite3").verbose();
const fs = require("fs");

// Remove the db file if it exists
if (fs.existsSync("./bookshelf.db")) {
  fs.unlinkSync("./bookshelf.db");
}

const sqlQueries = fs
  .readFileSync("./assets/db.sql")
  .toString()
  .split(");")
  .map((sql) => sql + ");");
sqlQueries.pop();

// const db = new sqlite3.Database(":memory:");
const db = new sqlite3.Database("bookshelf.db");

const init = () => {
  db.serialize(() => {
    sqlQueries.forEach((sql) => {
      db.run(sql);
    });
  });
};

module.exports = {
  connect: () => {
    init();
    return db;
  },
};
