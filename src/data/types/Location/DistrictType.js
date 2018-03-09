import {
  GraphQLInt as Int,
  GraphQLList as List,
  GraphQLNonNull as NonNull,
  GraphQLObjectType as ObjectType,
  GraphQLString as String,
} from 'graphql'
import { resolver } from 'graphql-sequelize'
import { District, Region, Suburb } from '../../models'
import RegionType from './RegionType'
import SuburbType from './SuburbType'

District.Region = District.belongsTo(Region)
District.Suburbs = District.hasMany(Suburb, { as: 'suburbs' })

// todo: add comments and descriptions
const DistrictType = new ObjectType({
  name: 'District',
  fields: () => ({
    id: { type: new NonNull(Int) },
    name: { type: String },
    region: {
      type: RegionType,
      resolve: resolver(District.Region),
    },
    suburbs: {
      type: new List(SuburbType),
      resolve: resolver(District.Suburbs),
    },
  }),
})

export default DistrictType
