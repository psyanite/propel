import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import { Suburb, District } from '../../models';
import DistrictType from './DistrictType';

Suburb.District = Suburb.belongsTo(District);

// todo: add comments and descriptions
const SuburbType = new ObjectType({
  name: 'Suburb',
  fields: () => ({
    id: { type: new NonNull(Int) },
    name: { type: String },
    district: {
      type: DistrictType,
      resolve: resolver(Suburb.District),
    },
  }),
});

export default SuburbType;
