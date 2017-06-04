import React from 'react';
import Meowout from '../../components/Meowout';
import Listings from './Listings';

export default {

  path: '/',

  async action({ fetch }) {
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{Listings(orderBy: {field: id}){id,name,price,guestCount,bedroomCount,bedCount,image,description}}',
      }),
    });
    const { data } = await resp.json();
    if (!data || !data.Listings) throw new Error('Ayy Lmeow.');
    return {
      component: <Meowout><Listings listings={data.Listings} /></Meowout>,
    };
  },

};
