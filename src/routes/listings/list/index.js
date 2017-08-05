import React from 'react';
import graphqlify, { Enum } from 'graphqlify';
import Meowout from '../../../components/Meowout/Meowout';
import Listings from './Listings';

/* todo: there must be some better than way than to do .. three times in the import? */
export default {

  path: '/',

  async action({ fetch }) {
    const allListingsQuery = graphqlify({
      allListings: {
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
      body: JSON.stringify({ query: allListingsQuery }),
      headers: new Headers(),
    });
    const { data } = await resp.json();
    if (!data) {
      throw new Error('Meow');
    }
    return {
      component: <Meowout><Listings listings={data.allListings.nodes} /></Meowout>,
    };
  },

};
