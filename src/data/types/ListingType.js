import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import { Listing, Area } from '../models';
import AreaType from './AreaType';

Listing.Area = Listing.belongsTo(Area);

// todo: add comments and descriptions
const ListingType = new ObjectType({
  name: 'Listing',
  fields: {
    id: { type: new NonNull(Int) },
    name: { type: String },
    area: {
      type: AreaType,
      resolve: resolver(Listing.Area),
    },
    price: { type: new NonNull(Int) },
    bedroomCount: { type: new NonNull(Int) },
    guestCount: { type: new NonNull(Int) },
    bedCount: { type: new NonNull(Int) },
    image: { type: new NonNull(String) },
    description: { type: new NonNull(String) },
  },
});

export default ListingType;
