import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../Common.css';

// todo: update propTypes
// todo: rework buildUri

class List extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
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
          <a className={s.row} key={item.id} href={this.buildUri(item)}>
            <span>{item.name}</span>
            <span>{item.area}</span>
            <span><sup className={s.priceSign}>$</sup><span className={s.priceValue}>{item.price}</span><span className={s.priceUnit}>AUD/night</span></span>
            <span className={s.other}><span>{item.guestCount} Guests · {item.bedroomCount} Bedrooms · {item.bedCount} Beds</span></span>
            <hr />
          </a>
        ))}
      </div>
    );
  }
}

export default withStyles(s)(List);
