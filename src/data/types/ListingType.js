import {
  GraphQLObjectType as ObjectType,
  GraphQLID as ID,
  GraphQLString as String,
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
} from 'graphql';

const ListingType = new ObjectType({
  name: 'Listing',
  fields: {
    id: { type: new NonNull(ID) },
    name: { type: new NonNull(String) },
    area: { type: new NonNull(String) },
    price: { type: new NonNull(Int) },
    bedroomCount: { type: new NonNull(Int) },
    guestCount: { type: new NonNull(Int) },
    bedCount: { type: new NonNull(Int) },
    image: { type: new NonNull(String) },
    description: { type: new NonNull(String) },
  },
});

export default ListingType;
