// Update with your config settings.

module.exports = {
  //   development: {
  //     client: "sqlite3",
  //     useNullAsDefault: true,
  //     connection: {
  //       filename: "./data/user00.db3",
  //     },
  //     migrations: {
  //       directory: "./data/migrations",
  //     },
  //     seeds: {
  //       directory: "./data/seeds",
  //     },
  //     pool: {
  //       afterCreate: (conn, done) => {
  //         conn.run("PRAGMA foreign_keys = ON", done);
  //       },
  //     },
  //   },

  development: {
    client: "pg",
    connection: "postgres://localhost/user00",
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },

  production: {
    client: "pg",
    connection: process.env.DATABASE_URL,
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./data/migrations",
    },
    seeds: {
      directory: "./data/seeds",
    },
  },
};
