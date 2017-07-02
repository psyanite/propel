import React from 'react';
import Meowout from '../../../components/Meowout/Meowout';
import Listing from './Listing';

export default {

  path: '/:id',

  async action({ params, fetch }) {
    const resp = await fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify({
        query: `{listingById(id:${params.id}){id,name}}`,
      }),
      headers: new Headers(),
    });
    const { data } = await resp.json();
    if (!data.listingById) {
      throw new Error('Ayy Lmeow1!!!');
    }
    return {
      component: <Meowout><Listing listing={data.listingById} /></Meowout>,
    };
  },

};
