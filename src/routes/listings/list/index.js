import React from 'react';
import qs from 'qs';
import graphqlify, { Enum } from 'graphqlify';
import Meowout from '../../../components/Meowout/Meowout';
import Listings from './Listings';

/* todo: there must be some better than way than to do .. three times in the import? */
// todo: name params/parameters etc. appropriately
export default {

  path: '/',

  async action({ query, fetch }) {
    const paramsTemplate = {
      areaId: '',
    };
    const params = Object.assign(paramsTemplate, qs.parse(query));

    const queryParams = { orderBy: Enum('ID_ASC') };
    Object.keys(params).forEach((key) => {
      const values = params[key];
      if (values) {
        queryParams[key] = values.map(value => Number(value));
      }
    });


    const meow = graphqlify({
      listings: {
        field: 'searchListings',
        params: queryParams,
        fields: {
          nodes: {
            fields: {
              id: {},
              name: {},
              propertyType: {
                field: 'propertyTypeByPropertyTypeId',
                fields: {
                  name: {},
                },
              },
              area: {
                field: 'areaByAreaId',
                fields: {
                  name: {},
                },
              },
              price: {},
              guestCount: {},
              bedroomCount: {},
              image: {},
              description: {},
            },
          },
        },
      },
    });
    console.log(meow);

    const listingsQuery = graphqlify({
      listings: {
        field: 'allListings',
        params: { orderBy: Enum('ID_ASC') },
        fields: {
          nodes: {
            fields: {
              id: {},
              name: {},
              propertyType: {
                field: 'propertyTypeByPropertyTypeId',
                fields: {
                  name: {},
                },
              },
              area: {
                field: 'areaByAreaId',
                fields: {
                  name: {},
                },
              },
              price: {},
              guestCount: {},
              bedroomCount: {},
              image: {},
              description: {},
            },
          },
        },
      },
    });
    const resp = await fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify({ query: meow }),
      headers: new Headers(),
    });

    const { data } = await resp.json();
    if (!data) {
      throw new Error('Meow');
    }
    return {
      component: <Meowout><Listings listings={data.listings.nodes} params={params} /></Meowout>,
    };
  },

};
