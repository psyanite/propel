import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import { Listing, Suburb, PropertyKind } from '../models';
import { SuburbType, PropertyKindType } from '.';

Listing.Suburb = Listing.belongsTo(Suburb);
Listing.PropertyKind = Listing.belongsTo(PropertyKind);

// todo: add comments and descriptions
const ListingType = new ObjectType({
  name: 'Listing',
  fields: {
    id: { type: new NonNull(Int) },
    name: { type: String },
    suburb: {
      type: SuburbType,
      resolve: resolver(Listing.Suburb),
    },
    propertyKind: {
      type: PropertyKindType,
      resolve: resolver(Listing.PropertyKind),
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
