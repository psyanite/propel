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

  buildUri(item) {
    return `/listings/${item.id}`;
  }

  render() {
    return (
      <div>
        {this.props.listings.map(item => (
          <a key={item.id} className={s.tile} href={this.buildUri(item)}>
            <div className={s.carousel}>
              <div className={s.priceContainer}>
                <div className={s.priceContent}>
                  <sup className={c.priceSign}>$</sup>
                  <span className={c.priceValue}>{item.price}</span><span className={c.priceUnit}>AUD/night</span>
                </div>
              </div>
              <img className={s.picture} src={item.image} alt={item.name} />
            </div>
            <h1 className={s.title}>{item.name}</h1>
            <span>{item.guestCount} Guests · {item.bedroomCount} Bedrooms · {item.bedCount} Beds</span>
          </a>
        ))}
      </div>
    );
  }
}

export default withStyles(c, s)(Tiles);
