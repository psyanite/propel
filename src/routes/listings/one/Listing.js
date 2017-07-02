import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Listing.css';

class Listing extends React.Component {
  static propTypes = {
    listing: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div>
        <h1>meow</h1>
        <h1>{this.props.listing.id}</h1>
        <h1>{this.props.listing.name}</h1>
      </div>
    );
  }
}

export default withStyles(s)(Listing);
