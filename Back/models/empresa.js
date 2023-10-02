'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Empresa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Empresa.belongsTo(models.Documento,{
        foreignKey:'documento_id',
        as:'documentos_fk'
      }        
      )
      Empresa.belongsTo(models.Ciudad,{
        foreignKey:'ciudad_id',
        as:'ciudad_fk'
      }        
      )
      Empresa.belongsTo(models.Session,{
        foreignKey:'session_code',
        as:'sesiones_fk'
      }        
      )
      // define association here
    }
  }
  Empresa.init({
    id_empresa:{
      type:INTEGER,
      allowNull: false,
            primaryKey: true,
            autoIncrement:true
    },
    nombre: DataTypes.STRING,
    direccion: DataTypes.STRING,
    telefono: DataTypes.INTEGER,
    sector: DataTypes.STRING,
    ciudad_id: DataTypes.INTEGER,
    documento: DataTypes.INTEGER,
    documento_id: DataTypes.INTEGER,
    correo: DataTypes.STRING,
    session_code: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Empresa',
    tableName:'empresas'
  });
  return Empresa;
};