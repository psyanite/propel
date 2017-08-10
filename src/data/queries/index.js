import {
  GraphQLObjectType as ObjectType,
} from 'graphql';
import Listings from './Listings';
import Areas from './Areas';
import PropertyTypes from './PropertyTypes';

const fields = Object.assign(
  {},
  Listings,
  Areas,
  PropertyTypes,
);

const Query = new ObjectType({
  name: 'Meowry',
  fields,
});

export default Query;
