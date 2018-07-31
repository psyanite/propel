import { GraphQLList as List } from 'graphql';
import { SuburbType } from '../../types';
import { Suburb } from '../../models';

const suburbs = {
  allSuburbs: {
    type: new List(SuburbType),
    resolve() {
      return Suburb.findAll({}).then(data => data);
    },
  },
};

export default suburbs;
