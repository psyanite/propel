import { GraphQLList as List } from 'graphql';
import { DistrictType } from '../../types';
import { District } from '../../models';

const districts = {
  allDistricts: {
    type: new List(DistrictType),
    resolve() {
      return District.findAll({}).then(data => data);
    },
  },
};

export default districts;
