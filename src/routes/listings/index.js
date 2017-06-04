import React from 'react';
import Layout from '../../components/Layout';
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
      component: <Layout><Listings title={title} listings={data.Listings} /></Layout>,
    };
  },

};
