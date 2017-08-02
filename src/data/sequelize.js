import Sequelize from 'sequelize';
import config from '../config';

// const sequelize = new Sequelize('postgres://postgres:meow@localhost:5432/react-meow', {
//   define: {
//     freezeTableName: true,
//     timestamps: false,
//   },
// });

const sequelize = new Sequelize('react-meow', 'postgres', 'meow', {
  host: 'localhost',
  dialect: 'postgres',
  define: {
    freezeTableName: true,
    timestamps: false,
  },
});

export default sequelize;
