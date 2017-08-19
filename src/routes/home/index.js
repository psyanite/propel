import React from 'react';
import graphqlify from 'graphqlify';
import Layout from '../../components/Home/Layout';
import Home from './Home';

const buildFilters = data => {
  const filters = Object.keys(data).map(key => {
    const filter = {};
    filter.id = key;
    filter.options = data[key].map(option => ({
      label: option.name,
      value: option.id,
    }));
    switch (key) {
      case 'areaId':
        filter.placeholder = 'Search by suburb';
        break;
      default:
        filter.placeholder = 'Meow';
    }
    return filter;
  });
  return filters;
};

async function action({ fetch }) {
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
  });
  const { data } = await resp.json();
  if (!data) throw new Error('Meow');
  const filters = buildFilters(data);

  return {
    chunks: ['home'],
    title: 'Meow',
    component: (
      <Layout>
        <Home filters={filters} />
      </Layout>
    ),
  };
}

export default action;
