// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {




  development: {
    client: 'postgresql',
    connection: {
      database: 'shitish',
      user:     'postgres',
      password: 'Shitish'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
