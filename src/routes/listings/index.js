/* eslint-disable global-require */

// The top-level (parent) route
export default {

  path: '/listings',

  // Keep in mind, routes are evaluated in order
  children: [
    require('./list').default,
  ],

};
