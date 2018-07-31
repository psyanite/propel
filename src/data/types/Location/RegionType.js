import {
  GraphQLInt as Int,
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import { District, Region } from '../../models';
import DistrictType from './DistrictType';

Region.Districts = Region.hasMany(District);

// todo: add comments and descriptions
const RegionType = new ObjectType({
  name: 'Region',
  fields: () => ({
    id: { type: new NonNull(Int) },
    name: { type: String },
    districts: {
      type: new List(DistrictType),
      resolve: resolver(Region.Districts),
    },
  }),
});

export default RegionType;
