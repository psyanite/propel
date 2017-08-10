import {
  GraphQLList as List,
} from 'graphql';
import PropertyKindType from '../types/PropertyKindType';
import PropertyKind from '../models/PropertyKind';

const propertyKinds = {
  allPropertyTypes: {
    type: new List(PropertyKindType),
    resolve() {
      return PropertyKind.findAll({})
        .then(data => data);
    },
  },
};

export default propertyKinds;
