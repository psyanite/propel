import React from 'react';
import Meowout from '../../../components/Meowout/Meowout';
import Listings from './Listings';

export default {

  path: '/',

  async action({ fetch }) {
    const resp = await fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: '{allListings(orderBy:ID_ASC){edges{node{id,name,price,guestCount,bedroomCount,bedCount,image,description}}}}',
      }),
      headers: new Headers(),
    });
    const { data } = await resp.json();
    if (!data) {
      throw new Error('Ayy Lmeow1!!!');
    }
    return {
      component: <Meowout><Listings listings={data.allListings.edges} /></Meowout>,
    };
  },

};
