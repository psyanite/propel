/* eslint-disable no-param-reassign */
import {
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLInt as Int,
} from 'graphql';
import { resolver } from 'graphql-sequelize';
import { ListingType } from '../types';
import { Listing } from '../models';

const listings = {
  allListings: {
    type: new List(ListingType),
    resolve() {
      return Listing.findAll({}).then(data => data);
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

  listingSearch: {
    type: new List(ListingType),
    args: {
      suburbId: {
        description: 'Set of suburb to include in the result',
        type: new List(Int),
      },
    },
    resolve: resolver(Listing, {
      before: (findOptions, args) => {
        if (args.suburbId.length > 0) {
          findOptions.where = {
            suburbId: { $in: args.suburbId },
          };
        }
        else {
          findOptions.where = {
            suburbId: { $ne: null },
          };
        }
        findOptions.order = [['name', 'ASC']];
        return findOptions;
      },
    }),
  },
};

export default listings;
