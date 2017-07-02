import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Listing.css';

/* todo: remove this.props.listing from every property? */
class Listing extends React.Component {
  static propTypes = {
    listing: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  };

  render() {
    return (
      <div className={s.floor}>
        <div className={s.header}>
          <h1>{this.props.listing.name}</h1>
        </div>
        <div className={s.summary}>
          <div>{this.props.listing.area}</div>
          <div><sup className={s.priceSign}>$</sup><span className={s.priceValue}>{this.props.listing.price}</span><span className={s.priceUnit}>AUD/night</span></div>
          <div><span>{this.props.listing.guestCount} Guests · {this.props.listing.bedroomCount} Bedrooms · {this.props.listing.bedCount} Beds</span></div>
        </div>
        <div className={s.carousel}>
          <img src={this.props.listing.image} alt={this.props.listing.name} />
        </div>
        <div className={s.other}>

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Listing);
