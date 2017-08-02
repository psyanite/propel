import React from 'react';
import graphqlify from 'graphqlify';
import Layout from '../../components/Home/Layout';
import Home from './Home';

async function action({ fetch }) {
  const allAreasQuery = graphqlify({
    allAreas: {
      fields: {
        nodes: {
          fields: {
            name: {},
          },
        },
      },
    },
  });
  const resp = await fetch('/graphql', {
    method: 'POST',
    body: JSON.stringify({ query: allAreasQuery }),
    headers: new Headers(),
  });
  const { data } = await resp.json();
  if (!data) {
    throw new Error('Meow');
  }

  // TODO: Refactor areaOptions
  const areas = data.allAreas.nodes
    .map(node => node.area)
    .reduce((x, y) => x.includes(y) ? x : [...x, y], [])
    .reduce((acc, cur, i) => {
      acc[i] = { value: cur, label: cur };
      return acc;
    }, {});
  const areaOptions = Object.values(areas);

  return {
    chunks: ['home'],
    title: 'Meow',
    component: (
      <Layout><Home areaOptions={areaOptions} /></Layout>
    ),
  };
}

export default action;
