import {
  GraphQLList as List,
} from 'graphql';
import PropertyTypeType from '../types/PropertyTypeType';
import PropertyType from '../models/PropertyType';

const propertyTypes = {
  allPropertyTypes: {
    type: new List(PropertyTypeType),
    resolve() {
      return PropertyType.findAll({})
        .then(data => data);
    },
  },
};

export default propertyTypes;
