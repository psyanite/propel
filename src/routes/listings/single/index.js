import React from 'react';
import graphqlify from 'graphqlify';
import Meowout from '../../../components/Meowout/Meowout';
import Listing from './Listing';

export default {

  path: '/:id',

  async action({ params, fetch }) {
    const listingQuery = graphqlify({
      listingById: {
        params: { id: Number(params.id) },
        fields: {
          id: {},
          name: {},
          description: {},
          link: {},
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
          image: {},
        },
      },
    });
    const resp = await fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify({ query: listingQuery }),
      headers: new Headers(),
    });
    const { data } = await resp.json();
    const listing = data.listingById.pop();
    if (!listing) {
      throw new Error('Meow');
    }
    return {
      component: <Meowout><Listing listing={listing} /></Meowout>,
    };
  },

};
