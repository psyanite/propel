import { GraphQLObjectType as ObjectType } from 'graphql'
import Listings from './Listings'
import Regions from './Location/Regions'
import Districts from './Location/Districts'
import Suburbs from './Location/Suburbs'
import PropertyKinds from './PropertyKinds'

const fields = Object.assign(
  {},
  Listings,
  Regions,
  Districts,
  Suburbs,
  PropertyKinds,
)

const Query = new ObjectType({
  name: 'Meowry',
  fields,
})

export default Query
