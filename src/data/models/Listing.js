import DataType from 'sequelize';
import Model from '../sequelize';

const Listing = Model.define('listings', {

  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },

  name: {
    type: DataType.STRING(255),
  },

  price: {
    type: DataType.INTEGER,
  },

  bedroomCount: {
    type: DataType.INTEGER,
  },

  guestCount: {
    type: DataType.INTEGER,
  },

  bedCount: {
    type: DataType.INTEGER,
  },

  image: {
    type: DataType.STRING(255),
  },

  description: {
    type: DataType.TEXT,
  },

  link: {
    type: DataType.STRING(255),
  },

  createdAt: {
    type: DataType.DATE,
  },

  updatedAt: {
    type: DataType.DATE,
  },

}, {

  indexes: [
    { fields: ['name'] },
  ],

});

export default Listing;
