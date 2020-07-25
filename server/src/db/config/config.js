require('dotenv/config');
module.exports = {
      development: {
          username: 'julia',
          password: 'admin',
          database: 'todo_db',
          host: 'localhost',
          dialect: 'postgres',
          migrationStorage: 'json',
          seederStorage: 'json'
      },
      test: {},
      production: {},
  };