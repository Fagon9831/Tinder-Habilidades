'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Chat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Chat.belongsTo(models.Session,{
        foreignKey:'sesion_e',
        as:'session_empresa_fk'
      }),        
      Chat.belongsTo(models.Session,{
        foreignKey:'sesion_a',
        as:'session_aplicante_fk'
      }
      )
    }
  }
  Chat.init({
    id_chat:{
      type:INTEGER,
      allowNull: false,
            primaryKey: true,
            autoIncrement:true
    },
    message: DataTypes.STRING,
    code_chat: DataTypes.STRING,
    sesion_e: DataTypes.STRING,
    sesion_a: DataTypes.STRING,
    fecha: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Chat',
    tableName:'chat'
  });
  return Chat;
};