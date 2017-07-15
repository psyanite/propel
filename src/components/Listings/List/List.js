import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../Common.css';

// todo: remove repeating item.node
// todo: update propTypes
// todo: rework buildUri

class List extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape.isRequired,
    })).isRequired,
  };

  buildUri(item) {
    return `/listings/${item.id}`;
  }

  render() {
    return (
      <div className={s.list}>
        <div className={s.header}>
          <span>Listing name</span>
          <span>Area</span>
          <span>Price</span>
          <span className={s.other}>Other</span>
          <hr />
        </div>

        {this.props.listings.map(item => (
          <a className={s.row} key={item.node.id} href={this.buildUri(item.node)}>
            <span>{item.node.name}</span>
            <span>{item.node.area}</span>
            <span><sup className={s.priceSign}>$</sup><span className={s.priceValue}>{item.node.price}</span><span className={s.priceUnit}>AUD/night</span></span>
            <span className={s.other}><span>{item.node.guestCount} Guests · {item.node.bedroomCount} Bedrooms · {item.node.bedCount} Beds</span></span>
            <hr />
          </a>
        ))}
      </div>
    );
  }
}

export default withStyles(s)(List);
