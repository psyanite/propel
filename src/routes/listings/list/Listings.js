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
            <div key={item.node.id} className={s.lTile}>
              <h1 className={s.title}>{item.node.id} {item.node.name}</h1>
              <p>${item.node.price} AUD</p>
              <p>{item.node.guestCount} Guests</p>
              <p>{item.node.bedroomCount} Bedrooms</p>
              <p>{item.node.bedCount} Beds</p>
              <p>{item.node.description}</p>
              <img className={s.picture} src={item.node.image} alt={item.node.name} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Listings);
