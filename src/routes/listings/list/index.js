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

    console.log(queryParams);

    const meow = graphqlify({
      listings: {
        field: 'allListings',
        fields: {
          id: {},
          name: {},
          area: {
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
      headers: new Headers(),
    });

    const { data } = await resp.json();
    const listings = data.listings;
    if (!listings) {
      throw new Error('Meow');
    }
    return {
      component: <Meowout><Listings listings={listings} params={params} /></Meowout>,
    };
  },

};
