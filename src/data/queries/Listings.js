import {
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLInt as Int,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import ListingType from '../types/ListingType';
import Listing from '../models/Listing';

const listings = {
  allListings: {
    type: new List(ListingType),
    resolve() {
      return Listing.findAll({})
        .then(data => data);
    },
  },
  listingById: {
    type: new List(ListingType),
    args: {
      id: {
        type: new NonNull(Int),
      },
    },
    resolve: resolver(Listing),
  },
};

export default listings;
