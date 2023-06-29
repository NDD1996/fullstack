"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          email: "ndd2102@gmail.com",
          password: "ndd2102",
          firstName: "Nguyễn Đức",
          lastName: "Đạt",
          address: "Bắc Ninh",
          phonenumber: '0397270896',
          gender: 1,
          image: '',
          roleId: '',
          positionId: '',
          createdAt: new Date(),
          updatedAt: new Date()
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
