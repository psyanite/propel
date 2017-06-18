// src/schema.js
import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import graphql from 'graphql';
import { graphql } from 'graphql';

import resolvers from './resolvers';


const typeDefs = `
type Channel {
  id: ID!
   name: String
}

type Query {
   channels: [Channel]
}
`;

const schema = makeExecutableSchema({ typeDefs: typeDefs, resolvers: resolvers });
// addMockFunctionsToSchema({ schema });

const query = `
query tasksForUser {
  user(id: 6) { id, name }
}
`;
// graphql(schema, query).then((result) => console.log('Got result', result));

export default schema;
