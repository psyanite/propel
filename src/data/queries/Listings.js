/* eslint-disable no-param-reassign */
import {
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLInt as Int,
} from 'graphql'
import { resolver } from 'graphql-sequelize'
import { ListingType } from '../types'
import { Listing, Suburb } from '../models'

const isUndefined = item => typeof item === 'undefined'

const isNonEmptyArray = item =>
  !isUndefined(item) && Array.isArray(item) && item.length > 0

const buildMinMaxCriteria = (min, max) => {
  if (min && max) {
    return { $between: [min, max] }
  } else if (min) {
    return { $gte: min }
  } else if (max) {
    return { $lte: max }
  }
  return null
}

const buildWhere = args => {
  const where = {}
  if ('suburbId' in args) {
    where.suburbId = args.suburbId
  }
  if ('priceMin' in args || 'priceMax' in args) {
    where.price = buildMinMaxCriteria(args.priceMin, args.priceMax)
  }
  return where
}

const buildInclude = args => {
  const suburbModel = {
    model: Suburb,
  }
  if ('districtId' in args) {
    suburbModel.where = { districtId: args.districtId }
  }
  return [suburbModel]
}

const listings = {
  allListings: {
    type: new List(ListingType),
    resolve() {
      return Listing.findAll({}).then(data => data)
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

  // todo: maybe this needs to be refactored out
  listingSearch: {
    type: new List(ListingType),
    args: {
      districtId: {
        description: 'Set of districts of listings in the result set', // todo: turing is turning in his grave right now
        type: new List(Int),
      },
      suburbId: {
        description: 'Set of suburb of listings in the result set', // todo: for the love of abba, please
        type: new List(Int),
      },
      priceMin: {
        description: 'Minimum price of listings in the result set', // todo: please write less horrific descriptions
        type: Int,
      },
      priceMax: {
        description: 'Maximum price of listings in the result set', // todo: oh, meow, why
        type: Int,
      },
      propertyKindId: {
        description: 'Set of property kinds of listings in the result set', // todo: y u gotta be like dat
        type: new List(Int),
      },
    },
    resolve: resolver(Listing, {
      before: (findOptions, args) => {
        findOptions.where = buildWhere(args)
        findOptions.order = [['name', 'ASC']]
        findOptions.include = buildInclude(args)
        return findOptions
      },
    }),
  },
}

export default listings
