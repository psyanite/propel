import {
  GraphQLNonNull as NonNull,
  GraphQLString as String
} from "graphql";

import { Listing } from '../models';
import ListingType from "../types/ListingType";

const addListing = {
  type: ListingType,
  description: 'Add a Listing',
  args: {
    name: {
      name: 'Listing name',
      type: new NonNull(String)
    }
  },
  resolve: (value, {name}) => {
    return Listing.create({name: name});
  }
};

const updateListing = {
  type: ListingType,
  description: 'Add a Listing',
  args: {
    name: {
      name: 'Listing name',
      type: new NonNull(String)
    }
  },
  resolve: (value, {name}) => {
    return Listing.create({name: name});
  }
};

const listing = {
  addListing: addListing,
  updateListing: updateListing
};

export default listing;
