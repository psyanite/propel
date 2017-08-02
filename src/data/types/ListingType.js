import {
  GraphQLID as ID,
  GraphQLInt as Int,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String,
} from 'graphql';

const ListingType = new ObjectType({
  name: 'Listing',
  fields: {
    id: { type: new NonNull(ID) },
    // name: { type: new String },
    // area: {
    //   type: AreaType,
    //   resolve: resolver(Listing.Area),
    // },
    // price: { type: new NonNull(Int) },
    // bedroomCount: { type: new NonNull(Int) },
    // guestCount: { type: new NonNull(Int) },
    // bedCount: { type: new NonNull(Int) },
    // image: { type: new NonNull(String) },
    // description: { type: new NonNull(String) },
  },
});

export default ListingType;
