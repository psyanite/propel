import React from 'react';
import graphqlify from 'graphqlify';
import Layout from '../../components/Home/Layout';
import Home from './Home';

export default {

  path: '/',

  async action({ fetch }) {
    const filterOptionsQuery = graphqlify({
      areaId: {
        field: 'allAreas',
        fields: {
          nodes: {
            fields: {
              id: {},
              name: {},
            },
          },
        },
      },
      // propertyTypeId: {
      //   field: 'allPropertyTypes',
      //   fields: {
      //     nodes: {
      //       fields: {
      //         name: {},
      //       },
      //     },
      //   },
      // },
    });
    const resp = await fetch('/graphql', {
      method: 'POST',
      body: JSON.stringify({ query: filterOptionsQuery }),
      headers: new Headers(),
    });
    const { data } = await resp.json();
    if (!data) {
      throw new Error('Meow');
    }

    const filters = Object.keys(data).map((key) => {
      const filter = {};
      filter[key] = data[key].nodes.map(node => ({ name: node.name, value: node.id }));
      filter[key].unshift({ name: 'Any', value: null });
      return filter;
    });

    return {
      component: <Layout><Home filterOptions={filters} /></Layout>,
    };
  },

};
