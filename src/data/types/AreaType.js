import {
  GraphQLID as ID,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String,
} from 'graphql';

const AreaType = new ObjectType({
  name: 'Area',
  fields: {
    id: { type: new NonNull(ID) },
    // name: { type: new NonNull(String) },
  },
});

export default AreaType;
