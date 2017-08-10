import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import { Listing, Area, PropertyType } from '../models';
import AreaType from './AreaType';
import PropertyTypeType from './PropertyTypeType';

Listing.Area = Listing.belongsTo(Area);
Listing.PropertyType = Listing.belongsTo(PropertyType);

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
    propertyType: {
      type: PropertyTypeType,
      resolve: resolver(Listing.PropertyType),
    },
    price: { type: new NonNull(Int) },
    bedroomCount: { type: new NonNull(Int) },
    guestCount: { type: new NonNull(Int) },
    bedCount: { type: new NonNull(Int) },
    link: { type: new NonNull(String) },
    image: { type: new NonNull(String) },
    description: { type: new NonNull(String) },
  },
});

export default ListingType;
