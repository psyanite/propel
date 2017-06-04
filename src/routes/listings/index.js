import React from 'react';
import Meowout from '../../components/Meowout';
import Listings from './Listings';

const title = 'Meow';

export default {

  path: '/',

  async action({ fetch }) {
    const resp = await fetch('/graphql', {
      body: JSON.stringify({
        query: '{Listings{id,name,price,guestCount,bedroomCount,bedCount,image,description}}',
      }),
    });
    const { data } = await resp.json();
    if (!data || !data.Listings) throw new Error('Ayy Lmeow.');
    return {
      title,
      component: <Meowout><Listings title={title} listings={data.Listings} /></Meowout>,
    };
  },

};
