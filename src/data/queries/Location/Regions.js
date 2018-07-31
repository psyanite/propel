import { GraphQLList as List } from 'graphql';
import { RegionType } from '../../types';
import { Region } from '../../models';

const regions = {
  allRegions: {
    type: new List(RegionType),
    resolve() {
      return Region.findAll({}).then(data => data);
    },
  },
};

export default regions;
