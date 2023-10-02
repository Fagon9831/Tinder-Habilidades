'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Session extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Session.belongsTo(models.Tipo_session,{
        foreignKey:'tipo_id',
        as:'tipoSesssion_fk'
      }        
      )
      /*Mascotas.belongsTo(models.Clientes,{
        foreginKey:'id_cliente',
        as: 'cliente'
      })*/
    }
  }
  Session.init({
    id_session:{
      type:INTEGER,
      allowNull: false,
            primaryKey: true,
            autoIncrement:true
    },
    usuario: DataTypes.STRING,
    contraseña: DataTypes.STRING,
    code_session: DataTypes.STRING,
    tipo_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Session',
    tableName:'session'
  });
  return Session;
};