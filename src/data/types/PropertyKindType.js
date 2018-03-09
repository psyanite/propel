import {
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String,
} from 'graphql'

// todo: add comments and descriptions
const PropertyKindType = new ObjectType({
  name: 'PropertyKind',
  fields: {
    id: { type: new NonNull(Int) },
    name: { type: String },
  },
})

export default PropertyKindType
