import React from 'react';
import graphqlify from 'graphqlify';
import Layout from '../../components/Home/Layout';
import Home from './Home';

export default {

  path: '/',

  async action({ fetch }) {
    const filtersQuery = graphqlify({
      areaId: {
        field: 'allAreas',
        fields: {
          id: {},
          name: {},
        },
      },
    });

    const resp = await fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify({ query: filtersQuery }),
      headers: new Headers(),
    });
    const { data } = await resp.json();
    if (!data) {
      throw new Error('Meow');
    }

    const filters = Object.keys(data).map((key) => {
      const filter = {};
      filter[key] = data[key].map(option => ({ name: option.name, value: option.id }));
      filter[key].unshift({ name: 'Any', value: null });
      return filter;
    });

    return {
      component: <Layout><Home filterOptions={filters} /></Layout>,
    };
  },

};
