exports.up = function (knex) {
  return knex.schema.createTable("user00", (table) => {
    table.increments();
    table.string("username", 255).notNullable();
    table.string("password", 255).notNullable();
  });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists("user00");
};
