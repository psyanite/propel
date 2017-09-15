import React from 'react';
import graphqlify from 'graphqlify';
import Meowout from '../../../components/Meowout/Meowout';
import Listings from './Listings';

async function action({ query, fetch }) {
  const paramsTemplate = {
    districtId: [],
    suburbId: [],
  };

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
    filtersDistrict: {
      field: 'allDistricts',
      fields: {
        id: {},
        name: {},
        suburbs: {
          fields: {
            id: {},
            name: {},
          },
        },
      },
    },
    filtersPropTypes: {
      field: 'allPropertyTypes',
      fields: {
        id: {},
        name: {},
      },
    },
  });

  const resp = await fetch('/graphql', {
    method: 'POST',
    body: JSON.stringify({ query: meow }),
  });

  const { data } = await resp.json();
  if (!data) throw new Error('Meow');

  const listings = data.listings;
  const filters = {
    districts: data.filtersDistrict,
    propTypes: data.filtersPropTypes,
  };

  return {
    chunks: ['listings-list'],
    title: 'Meow',
    component: (
      <Meowout>
        <Listings filters={filters} listings={listings} params={params} />
      </Meowout>
    ),
  };
}

export default action;
