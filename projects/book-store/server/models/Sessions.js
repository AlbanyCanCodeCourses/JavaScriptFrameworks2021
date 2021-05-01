const uuidv4 = require("uuid").v4;

/**
 * Usually, we would store our sessions in a database instead of in memory.
 * However, for the purposes of demonstrating
 * the front-end of student portfolio piece, this works fine.
 */
const Sessions = {};

const findByUuid = (uuid) => {
  const session = Object.entries(Sessions).find(
    ([userId, sessionUuid]) => uuid === sessionUuid
  );
  return session
    ? {
        userId: session[0],
        uuid: session[1],
      }
    : undefined;
};

const insert = (userId) => {
  const uuid = uuidv4();
  Sessions[userId] = uuid;
  return uuid;
};

module.exports = {
  findByUuid,
  insert,
};
