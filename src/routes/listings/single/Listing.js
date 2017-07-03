import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import renderHtml from 'react-render-html';
import s from './Listing.css';

/* todo: remove this.props.listing from every property? */
/* todo: update propTypes */
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
          <span className={s.price}><sup className={s.priceSign}>$</sup><span className={s.priceValue}>{this.props.listing.price}</span><span className={s.priceUnit}>AUD/night</span></span>
          <span>Listed Fri 16 June, 10:05 am</span>
          <br />
          <span>{this.props.listing.area}</span> <span><span>{this.props.listing.guestCount} Guests · {this.props.listing.bedroomCount} Bedrooms · {this.props.listing.bedCount} Beds</span></span>
          <button>ayy lmao</button>
        </div>
        <div className={s.other}>
          <div className={s.description}>
            {renderHtml(this.props.listing.description)}
          </div>
          <div className={s.carousel}>
            <img src={this.props.listing.image} alt={this.props.listing.name} />
          </div>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Listing);
