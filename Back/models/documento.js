'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Documento extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
/*    static associate(models) {
      // define association here
    }*/
  }
  Documento.init({
    id_documento:{
      type:INTEGER,
      allowNull: false,
            primaryKey: true,
            autoIncrement:true
    },
    tipo_documento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Documento',
    tableName: 'documentos'
  });
  return Documento;
};