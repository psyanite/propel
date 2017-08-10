import DataType from 'sequelize';
import Model from '../sequelize';

const PropertyType = Model.define('propertyTypes', {

  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING(255),
  },

}, {

  indexes: [
    { fields: ['name'] },
  ],

});

export default PropertyType;
