import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import c from '../Common.css';
import s from './Thumbnails.css';

// todo: remove repeating item.node
// todo: update propTypes

class Thumbnails extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className={c.thumbnails}>
        {this.props.listings.map(item => (
          <div className={c.row} key={item.node.id}>
            <img className={s.picture} src={item.node.image} alt={item.node.name} />
            <span className={s.name}>{item.node.name}</span>
            <span className={s.area}>{item.node.area}</span>
            <span className={s.price}><sup className={c.priceSign}>$</sup><span className={c.priceValue}>{item.node.price}</span><span className={c.priceUnit}>AUD/night</span></span>
            <span className={s.other}><span>{item.node.guestCount} Guests · {item.node.bedroomCount} Bedrooms · {item.node.bedCount} Beds</span></span>
            <hr />
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(c, s)(Thumbnails);
