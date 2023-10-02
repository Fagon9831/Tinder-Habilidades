'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Contrato extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Contrato.belongsTo(models.Estados_contrato,{
        foreignKey:'estado_code',
        as:'tipoContrato_fk'
      })
    }
  }
  Contrato.init({
    id_contrato:{
      type:INTEGER,
      allowNull: false,
            primaryKey: true,
            autoIncrement:true
    },
    ubicacion: DataTypes.STRING,
    tiempo: DataTypes.INTEGER,
    fecha_inicio: DataTypes.DATE,
    comentarios_finales: DataTypes.STRING,
    session_e: DataTypes.STRING,
    session_a: DataTypes.STRING,
    ciudad: DataTypes.INTEGER,
    estado_code: DataTypes.INTEGER,
    funciones:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Contrato',
    tableName: 'contratos'
  });
  return Contrato;
};