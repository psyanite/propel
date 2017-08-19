import { GraphQLObjectType as ObjectType } from 'graphql';
import Listings from './Listings';
import Areas from './Areas';
import PropertyKinds from './PropertyKinds';

const fields = Object.assign({}, Listings, Areas, PropertyKinds);

const Query = new ObjectType({
  name: 'Meowry',
  fields,
});

export default Query;
