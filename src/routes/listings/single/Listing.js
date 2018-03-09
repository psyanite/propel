import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import renderHtml from 'react-render-html'
import s from './Listing.css'

// todo: update propTypes
class Listing extends React.Component {
  static propTypes = {
    listing: PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      suburb: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      propertyKind: PropTypes.shape({
        name: PropTypes.string.isRequired,
      }).isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      guestCount: PropTypes.number.isRequired,
      bedroomCount: PropTypes.number.isRequired,
      bedCount: PropTypes.number.isRequired,
    }).isRequired,
  };

  render() {
    const listing = this.props.listing
    return (
      <div className={s.floor}>
        <div className={s.header}>
          <a className={s.title} href={listing.link} target="_blank" rel="noopener noreferrer">{listing.name}</a>
          <span className={s.price}><sup className={s.priceSign}>$</sup><span className={s.priceValue}>{listing.price}</span><span className={s.priceUnit}>AUD/night</span></span>
          <span>Listed Fri 16 June, 10:05 am</span>
          <br />
          <span>{listing.suburb.name}</span> <span><span>{listing.guestCount} Guests · {listing.bedroomCount} Bedrooms · {listing.bedCount} Beds</span></span>
          <a className={s.linky} href={listing.link} target="_blank" rel="noopener noreferrer">View listing &#8250;</a>
        </div>
        <div className={s.other}>
          <div className={s.description}>
            {renderHtml(listing.description)}
          </div>
          <div className={s.carousel}>
            <img src={listing.image} alt={listing.name} />
          </div>
        </div>
      </div>
    )
  }
}

export default withStyles(s)(Listing)
