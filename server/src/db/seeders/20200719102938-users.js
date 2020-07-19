'use strict';
const bcrypt = require('bcrypt');

function generateUsers(){
  const users = [];
  for(let i=0; i<100; i++){
    users.push({
      firstName: `fname${i}`,
      lastName: `lname${i}`,
      email: `email${i}@mail.com`,
      login: `userlogin${i}`,
      passwordHash: bcrypt.hashSync(`password${i}`,10),
      createdAt: new Date(),
      updatedAt: new Date(),

    });
  }
  return users;
}

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', generateUsers(), {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', generateUsers(), {});
  }
};
