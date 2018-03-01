import DataType from 'sequelize';
import Model from '../../sequelize';

const Region = Model.define(
  'regions',
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

export default Region;
