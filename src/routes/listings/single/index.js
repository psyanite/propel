import React from 'react';
import graphqlify from 'graphqlify';
import Meowout from '../../../components/Meowout/Meowout';
import Listing from './Listing';

export default {

  path: '/:id',

  async action({ params, fetch }) {
    const listingQuery = graphqlify({
      listingById: {
        params: { id: parseInt(params.id) },
        fields: {
          id: {},
          name: {},
          description: {},
          link: {},
          area: {
            field: 'areaByAreaId',
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
    if (!data.listingById) {
      throw new Error('Meow');
    }
    console.log(data.listingById);
    return {
      component: <Meowout><Listing listing={data.listingById} /></Meowout>,
    };
  },

};
