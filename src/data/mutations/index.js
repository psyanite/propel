/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLNonNull as NonNull,
  GraphQLString as String,
  GraphQLObjectType as ObjectType,
} from 'graphql'

import { Listing } from '../models'
import ListingType from '../types/ListingType'

const addListing = {
  type: ListingType,
  description: 'Add a Listing',
  args: {
    name: {
      name: 'Listing name',
      type: new NonNull(String),
    },
  },
  resolve: (value, { name }) => Listing.create({ name }),
}

const Mutation = new ObjectType({
  name: 'Meowtation',
  description: 'Meowtation',
  fields: {
    addListing,
  },
})

export default Mutation
