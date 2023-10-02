'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Habilidad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Habilidad.init({
    id_habilidad:{
      type:INTEGER,
      allowNull: false,
            primaryKey: true,
            autoIncrement:true
    },
    habilidad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Habilidad',
    tableName: 'habilidades'
  });
  return Habilidad;
};