'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    return await queryInterface.bulkInsert(
      "Users",
      [
        {
          firstName: 'Uno',
          lastName: 'Test',
          email: 'fakeEmail1@email.ca',
          createdAt: new Date(),
          updatedAt: new Date(),
          password: `${Math.random() * 21 + 2}${Math.random() * 21 + 2}${Math.random() * 21 + 2}`,
        },
        {
          firstName: 'Zwei',
          lastName: 'Test',
          email: 'fakeEmail2@email.ca',
          createdAt: new Date(),
          updatedAt: new Date(),
          password: `${Math.random() * 21 + 2}${Math.random() * 21 + 2}${Math.random() * 21 + 2}`,
        },
        {
          firstName: 'Tres',
          lastName: 'Test',
          email: 'fakeEmail3@email.ca',
          createdAt: new Date(),
          updatedAt: new Date(),
          password: `${Math.random() * 21 + 2}${Math.random() * 21 + 2}${Math.random() * 21 + 2}`,
        },
      ]
    )
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    return await queryInterface.bulkDelete("Users", null, {})
  }
};
