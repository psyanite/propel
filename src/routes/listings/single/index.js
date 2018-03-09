import React from 'react'
import graphqlify from 'graphqlify'
import Meowout from '../../../components/Meowout/Meowout'
import Listing from './Listing'

async function action({ params, fetch }) {
  const listingQuery = graphqlify({
    listingById: {
      params: { id: Number(params.id) },
      fields: {
        id: {},
        name: {},
        description: {},
        link: {},
        suburb: {
          fields: {
            name: {},
          },
        },
        propertyKind: {
          fields: {
            name: {},
          },
        },
        price: {},
        guestCount: {},
        bedroomCount: {},
        bedCount: {},
        image: {},
      },
    },
  })

  const resp = await fetch('/graphql', {
    method: 'POST',
    body: JSON.stringify({ query: listingQuery }),
  })
  const { data } = await resp.json()
  const listing = data.listingById.pop()
  if (!listing) {
    throw new Error('Meow')
  }

  return {
    chunks: ['listings-single'],
    title: 'Meow',
    component: (
      <Meowout>
        <Listing listing={listing} />
      </Meowout>
    ),
  }
}

export default action
