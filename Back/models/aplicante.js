'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aplicante extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aplicante.init({
    id_aplicante:{
      type:INTEGER,
      allowNull: false,
            primaryKey: true,
            autoIncrement:true
    },
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    carrera: DataTypes.STRING,
    ciudad_id: DataTypes.INTEGER,
    documento: DataTypes.INTEGER,
    documento_id: DataTypes.INTEGER,
    habilidad1_id: DataTypes.INTEGER,
    habilidad2_id: DataTypes.INTEGER,
    habilidad3_id: DataTypes.INTEGER,
    habilidad4_id: DataTypes.INTEGER,
    habilidad5_id: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    session_code: DataTypes.STRING,
    valor_hora: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aplicante',
    tableName: 'aplicantes'
  });
  return Aplicante;
};