const db = require("../data/config-db");

function find() {
  return db("user00");
}

function findById(id) {
  return db("user00").where({ id }).first();
}

function findBy(filter) {
  return db("user00").where(filter);
}

async function add(body) {
  const [id] = await db("user00").insert(body, "id");
  return findById(id);
}
module.exports = {
  add,
  findById,
  findBy,
  find,
};
