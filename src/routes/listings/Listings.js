import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Listings.css';

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.lWrap}>
        <div className={s.lFloor}>
        {this.props.listings.map(item => (
          <div key={item.id} className={s.lTile}>
            <h1 className={s.title}>{item.id} {item.name}</h1>
            <p>${item.price} AUD</p>
            <p>{item.guestCount} Guests</p>
            <p>{item.bedroomCount} Bedrooms</p>
            <p>{item.bedCount} Beds</p>
            <p>{item.description}</p>
            <img className={s.picture} src={item.image} alt={item.name} />
          </div>
        ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Listings);
