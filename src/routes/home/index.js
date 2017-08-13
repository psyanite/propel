import React from 'react';
import graphqlify from 'graphqlify';
import Layout from '../../components/Home/Layout';
import Home from './Home';

async function action({ fetch }) {
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
  // const resp = await fetch('/graphql', {
  //   method: 'POST',
  //   body: JSON.stringify({ query: filterOptionsQuery })
  // });
  // const { data } = await resp.json();
  // if (!data) {
  //   throw new Error('Meow');
  // }

  // const filters = Object.keys(data).map((key) => {
  //   const filter = {};
  //   filter[key] = data[key].nodes.map(node => ({ name: node.name, value: node.id }));
  //   filter[key].unshift({ name: 'Any', value: null });
  //   return filter;
  // });

  const title = 'Meow';

  // {/*<Layout><Home filterOptions={filters} /></Layout>*/}
  return {
    chunks: ['home'],
    title: 'Meow',
    component: (
      <Layout><Home title={title} /></Layout>
    ),
  };
}

export default action;
