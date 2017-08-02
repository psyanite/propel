import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import c from '../Common.css';
import s from './Thumbnails.css';

// todo: update propTypes
// todo: rework buildUri

class Thumbnails extends React.Component {
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
      <div className={c.thumbnails}>
        {this.props.listings.map(item => (
          <a className={c.row} key={item.id} href={this.buildUri(item)}>
            <img className={s.picture} src={item.image} alt={item.name} />
            <span className={s.name}>{item.name}</span>
            <span className={s.area}>{item.area}</span>
            <span className={s.price}><sup className={c.priceSign}>$</sup><span className={c.priceValue}>{item.price}</span><span className={c.priceUnit}>AUD/night</span></span>
            <span className={s.other}><span>{item.guestCount} Guests · {item.bedroomCount} Bedrooms · {item.bedCount} Beds</span></span>
            <hr />
          </a>
        ))}
      </div>
    );
  }
}

export default withStyles(c, s)(Thumbnails);
