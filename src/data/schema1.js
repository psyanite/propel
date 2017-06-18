/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import {
  GraphQLSchema as Schema,
} from 'graphql';
import Query from './queries';
import Mutation from './mutations';

// self-built query and mutations
const schema = new Schema({
  query: Query,
  mutation: Mutation
});

// Using graphql-sequelize-crud
// only works with package.json: "graphql": "^0.8.0",
// import sequelize from './sequelize';
// const { getSchema } = require('graphql-sequelize-crud');
// const schema = getSchema(sequelize);


export default schema;
