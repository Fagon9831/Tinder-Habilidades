'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tipo_session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Tipo_session.init({
    tipo: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Tipo_session',
  });
  return Tipo_session;
};