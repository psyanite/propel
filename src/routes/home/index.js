import React from 'react';
import graphqlify from 'graphqlify';
import Layout from '../../components/Home/Layout';
import Home from './Home';

async function action({ fetch }) {
  const filtersQuery = graphqlify({
    districts: {
      field: 'allDistricts',
      fields: {
        id: {},
        name: {},
        suburbs: {
          fields: {
            id: {},
            name: {},
          },
        },
      },
    },
  });

  const resp = await fetch('/graphql', {
    method: 'POST',
    body: JSON.stringify({ query: filtersQuery }),
  });
  const { data } = await resp.json();
  if (!data) throw new Error('Meow');

  return {
    title: 'Meow',
    component: (
      <Layout>
        <Home filters={data} />
      </Layout>
    ),
  };
}

export default action;
