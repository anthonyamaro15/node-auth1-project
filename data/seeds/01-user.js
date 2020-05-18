exports.seed = function (knex) {
  // Inserts seed entries
  return knex("user00").insert([
    { username: "user1", password: "pass1" },
    { username: "user1", password: "pass1" },
    { username: "user2", password: "pass2" },
    { username: "user3", password: "pass3" },
  ]);
};
