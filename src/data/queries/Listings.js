import {
  GraphQLList as List,
} from 'graphql';

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
};

export default listings;
