import {
  GraphQLList as List,
} from 'graphql';

import ListingType from '../types/ListingType';
import Listing from '../models/Listing';

const listings = {
  type: new List(ListingType),
  resolve() {
    return Listing.findAll({})
      .then((data) => {
        return data;
      });
  },
};

export default listings;
