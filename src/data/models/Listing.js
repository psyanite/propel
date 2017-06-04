/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-present Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import DataType from 'sequelize';
import Model from '../sequelize';
const Listing = Model.define('Listing', {

  id: {
    type: DataType.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },

  name: {
    type: DataType.STRING(255),
  },

  area: {
    type: DataType.STRING(255),
  },

  price: {
    type: DataType.INTEGER,
  },

  bedroomCount: {
    type: DataType.INTEGER,
  },

  guestCount: {
    type: DataType.INTEGER,
  },

  bedCount: {
    type: DataType.INTEGER,
  },

  image: {
    type: DataType.STRING(255),
  },

  description: {
    type: DataType.STRING(255),
  },

  createdAt: {
    type: DataType.DATE,
  },

  updatedAt: {
    type: DataType.DATE,
  }

}, {

  indexes: [
    { fields: ['name'] },
  ],

});

export default Listing;
