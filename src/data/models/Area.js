import DataType from 'sequelize';
import Model from '../sequelize';

const Area = Model.define(
  'areas',
  {
    id: {
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },

    name: {
      type: DataType.STRING(255),
    },
  },
  {
    indexes: [{ fields: ['name'] }],
  },
);

export default Area;
