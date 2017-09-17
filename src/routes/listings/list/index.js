import React from 'react';
import graphqlify from 'graphqlify';
import Meowout from '../../../components/Meowout/Meowout';
import Listings from './Listings';

const isUndefined = item => typeof item === 'undefined';
const isNonEmptyArray = item =>
  !isUndefined(item) && Array.isArray(item) && item.length > 0;

const convertToNumStuff = item => {
  if (isNonEmptyArray(item)) {
    return item.map(value => Number(value));
  }
  return Number(item);
};

const buildParams = queryParams => {
  const params = {};
  Object.keys(queryParams).forEach(key => {
    const queryItem = queryParams[key];
    switch (key) {
      case 'districtId':
        params.districtId = convertToNumStuff(queryItem);
        break;
      case 'suburbId':
        params.suburbId = convertToNumStuff(queryItem);
        break;
      default:
    }
  });
  return params;
};

const buildListingsQuery = params => {
  const query = {
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
  };
  if (typeof params !== 'undefined' && params !== null) {
    query.params = params;
  }
  return query;
};

async function action({ query, fetch }) {
  const params = buildParams(query);

  const graphqlQuery = graphqlify({
    listings: buildListingsQuery(params),
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
    filtersPropertyTypes: {
      field: 'allPropertyTypes',
      fields: {
        id: {},
        name: {},
      },
    },
  });

  const resp = await fetch('/graphql', {
    method: 'POST',
    body: JSON.stringify({ query: graphqlQuery }),
  });

  const { data } = await resp.json();
  if (!data) throw new Error('Meow');

  const listings = data.listings;
  const filters = {
    districts: data.filtersDistrict,
    propertyTypes: data.filtersPropertyTypes,
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
