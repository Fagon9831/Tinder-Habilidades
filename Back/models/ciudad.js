'use strict';
const {
  Model, INTEGER
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Ciudad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    /*static associate(models) {  relaciones 
      // define association here ciudad Ciduda.belongsto(models.cliente)
      foreignkey:
      as:
    }*/
  }
  Ciudad.init({
    id:{
      type:INTEGER,
      allowNull: false,
            primaryKey: true,
            autoIncrement:true
    },
    ciudad: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Ciudad',
    tableName: 'ciudades'
  });
  return Ciudad;
};