import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Listings.css';

class Listings extends React.Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    listings: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <h1>{this.props.title}</h1>
          <p className={s.lead}>MEOW MEOW MEOW MEOW.</p>
          {this.props.listings.map(item => (
            <div key={item.id} className={s.newsItem}>
              <h1 className={s.newsTitle}>{item.name}</h1>
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
