'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Aplicantes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      apellido: {
        type: Sequelize.STRING
      },
      direccion: {
        type: Sequelize.STRING
      },
      telefono: {
        type: Sequelize.INTEGER
      },
      carrera: {
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
      habilidad1: {
        type: Sequelize.INTEGER
      },
      habilidad2: {
        type: Sequelize.INTEGER
      },
      habilidad3: {
        type: Sequelize.INTEGER
      },
      habilidad4: {
        type: Sequelize.INTEGER
      },
      habilidad5: {
        type: Sequelize.INTEGER
      },
      correo: {
        type: Sequelize.STRING
      },
      session_code: {
        type: Sequelize.STRING
      },
      valor_hora: {
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Aplicantes');
  }
};