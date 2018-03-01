import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import c from '../Common.css';
import s from './Thumbnails.css';

// todo: update propTypes
// todo: rework buildUri

class Thumbnails extends React.Component {
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
      <div className={c.thumbnails}>
        {this.props.listings.map(listing =>
          <a className={c.row} key={listing.id} href={this.buildUri(listing)}>
            <img className={s.picture} src={listing.image} alt={listing.name} />
            <span className={s.name}>
              {listing.name}
            </span>
            <span className={s.suburb}>
              {listing.suburb.name}
            </span>
            <span className={s.price}>
              <sup className={c.priceSign}>$</sup>
              <span className={c.priceValue}>
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
          </a>,
        )}
      </div>
    );
  }
}

export default withStyles(c, s)(Thumbnails);
