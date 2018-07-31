import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from '../Common.css';

// todo: update propTypes
// todo: rework buildUri

class List extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
  };

  buildUri = listing => `/listings/${listing.id}`;

  render() {
    return (
      <div className={s.list}>
        <div className={s.header}>
          <span>Listing name</span>
          <span>Suburb</span>
          <span>Price</span>
          <span className={s.other}>Other</span>
          <hr />
        </div>

        {this.props.listings.map(listing => (
          <a className={s.row} key={listing.id} href={this.buildUri(listing)}>
            <span>{listing.name}</span>
            <span>{listing.suburb.name}</span>
            <span>
              <sup className={s.priceSign}>$</sup>
              <span className={s.priceValue}>
                {listing.price.toLocaleString('en-US')}
              </span>
            </span>
            <span className={s.other}>
              <span>
                {listing.guestCount} Guests · {listing.bedroomCount} Bedrooms ·{' '}
                {listing.bedCount} Beds
              </span>
            </span>
            <hr />
          </a>
        ))}
      </div>
    );
  }
}

export default withStyles(s)(List);
