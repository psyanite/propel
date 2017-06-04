import {
  GraphQLObjectType as ObjectType,
} from 'graphql';
import Me from './Me';
import News from './News';
import Listings from './Listings';

const Query = new ObjectType({
  name: 'Query',
  fields: {
    Me,
    News,
    Listings,
  },
});

export default Query;
