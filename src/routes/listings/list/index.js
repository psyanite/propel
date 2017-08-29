import React from 'react';
import graphqlify from 'graphqlify';
import Meowout from '../../../components/Meowout/Meowout';
import Listings from './Listings';

async function action({ query, fetch }) {
  const paramsTemplate = {
    districtId: [],
    suburbId: [],
  };

  console.log(query);

  const params = Object.assign(paramsTemplate, query);
  Object.keys(params).forEach(key => {
    if (params[key].length > 0 && !Array.isArray(params[key])) {
      params[key] = [query[key]];
    }
    params[key] = params[key].map(value => Number(value));
  });

  const meow = graphqlify({
    listings: {
      field: 'listingSearch',
      params: { suburbId: params.suburbId },
      fields: {
        id: {},
        name: {},
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
        link: {},
        image: {},
        description: {},
      },
    },
  });

  const resp = await fetch('/graphql', {
    method: 'POST',
    body: JSON.stringify({ query: meow }),
  });

  const { data } = await resp.json();
  const listings = data.listings;
  if (!listings) {
    throw new Error('Meow');
  }

  return {
    chunks: ['listings-list'],
    title: 'Meow',
    component: (
      <Meowout>
        <Listings listings={listings} params={params} />
      </Meowout>
    ),
  };
}

export default action;
