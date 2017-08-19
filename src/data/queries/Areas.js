import { GraphQLList as List } from 'graphql';
import AreaType from '../types/AreaType';
import Area from '../models/Area';

const areas = {
  allAreas: {
    type: new List(AreaType),
    resolve() {
      return Area.findAll({}).then(data => data);
    },
  },
};

export default areas;
