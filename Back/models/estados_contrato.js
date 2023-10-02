'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Estados_contrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Estados_contrato.init({
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Estados_contrato',
  });
  return Estados_contrato;
};