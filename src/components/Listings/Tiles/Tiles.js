import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import c from '../Common.css'
import s from './Tiles.css'

// todo: update propTypes
// todo: rework buildUri

class Tiles extends React.Component {
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
      <div className={c.wrap}>
        {this.props.listings.map(listing =>
          <a key={listing.id} className={s.tile} href={this.buildUri(listing)}>
            <div className={s.carousel}>
              <div className={s.priceContainer}>
                <div className={s.priceContent}>
                  <sup className={c.priceSign}>$</sup>
                  <span className={c.priceValue}>
                    {listing.price.toLocaleString('en-US')}
                  </span>
                </div>
              </div>
              <img
                className={s.picture}
                src={listing.image}
                alt={listing.name}
              />
            </div>
            <h1 className={s.title}>
              {listing.name}
            </h1>
            <span>
              {listing.propertyKind.name} · {listing.guestCount} Guests ·{' '}
              {listing.bedroomCount} Bedrooms · {listing.bedCount} Beds
            </span>
          </a>,
        )}
      </div>
    )
  }
}

export default withStyles(c, s)(Tiles)
