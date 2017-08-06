import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import c from '../Common.css';
import s from './Tiles.css';

// todo: update propTypes

class Tiles extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number.isRequired,
    })).isRequired,
  };

  buildUri(listing) {
    return `/listings/${listing.id}`;
  }

  render() {
    return (
      <div>
        {this.props.listings.map(listing => (
          <a key={listing.id} className={s.tile} href={this.buildUri(listing)}>
            <div className={s.carousel}>
              <div className={s.priceContainer}>
                <div className={s.priceContent}>
                  <sup className={c.priceSign}>$</sup>
                  <span className={c.priceValue}>{listing.price}</span><span className={c.priceUnit}>AUD/night</span>
                </div>
              </div>
              <img className={s.picture} src={listing.image} alt={listing.name} />
            </div>
            <h1 className={s.title}>{listing.name}</h1>
            <span>{listing.propertyType.name} · {listing.guestCount} Guests · {listing.bedroomCount} Bedrooms · {listing.bedCount} Beds</span>
          </a>
        ))}
      </div>
    );
  }
}

export default withStyles(c, s)(Tiles);
