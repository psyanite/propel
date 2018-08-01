# 🚀 Propel 1.0.0

🐈 {Node.js, Express, PostgreSQL, Sequelize, GraphQL, React.js, Babel, PostCSS, Webpack, Browsersync}

🔥 Check it out now! https://proper-propel.herokuapp.com/

Propel is a rudimentary search engine that will bring you fictional properties near you at the touch of your fingerprints. Propel delivers Sequelized data from a PostgreSQL database via a shiny GraphQL API, crafted beautifully using React and PostCSS.

### Development Tools

* PostgreSQL 10
* JDK
* Git
* Babun
* Yarn
* Node
* Intellij
* DataGrip
* Git Kraken

### How to assemble

* Install PostgreSQL
* Clone repository
* Create `.env` file in root
* Add configurations like such:

```
DATABASE_DIALECT = 'postgres'
DATABSE_HOST = 'localhost'
DATABASE_PORT = 5432
DATABASE_NAME = 'burntoast'
DATABASE_USERNAME = 'postgres'
DATABASE_PASSWORD = 'password'
```
* `psql -U postgres -f 'src/data/migrations/clean.sql'`
* `psql -U postgres -d burntoast -f 'src/data/migrations/export.sql'`

### How to spin the propeller

* `yarn install`
* `yarn start`
* https://localhost:3000/
* https://localhost:3000/graphql
* Don't stick your finger in there



### GraphQL Meowries

```
allListings: [Listing]

listingById(id: Int!): [Listing]

listingSearch(
  districtId: [Int]
  suburbId: [Int]
  priceMin: Int
  priceMax: Int
  propertyKindId: [Int]
): [Listing]

allRegions: [Region]

allDistricts: [District]

allSuburbs: [Suburb]

allPropertyTypes: [PropertyKind]
```

### GraphQL Meowtations

```
addListing(name: String!): Listing
```
