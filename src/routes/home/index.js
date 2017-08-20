import React from 'react';
import graphqlify from 'graphqlify';
import Layout from '../../components/Home/Layout';
import Home from './Home';

const buildFilters = data =>
  Object.keys(data).map(key => {
    const filter = {};
    filter.id = key;
    filter.options = data[key].map(option => ({
      label: option.name,
      value: option.id,
    }));
    filter.options.unshift({ label: 'Any', value: '' });

    switch (key) {
      case 'suburbId':
        filter.placeholder = 'Search by suburb';
        break;
      default:
        filter.placeholder = 'Meow';
    }
    return filter;
  });

async function action({ fetch }) {
  const filtersQuery = graphqlify({
    suburbId: {
      field: 'allSuburbs',
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
