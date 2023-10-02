'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Empresas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      sector: {
        type: Sequelize.STRING
      },
      ciudad_id: {
        type: Sequelize.INTEGER
      },
      documento: {
        type: Sequelize.INTEGER
      },
      documento_id: {
        type: Sequelize.INTEGER
      },
      correo: {
        type: Sequelize.STRING
      },
      session_code: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Empresas');
  }
};