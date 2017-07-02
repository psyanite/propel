import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import c from '../Common.css';
import s from './Tiles.css';

// todo: remove repeating item.node
// todo: update propTypes

class Tiles extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div>
        {this.props.listings.map(item => (
          <div key={item.node.id} className={s.tile}>
            <div className={s.carousel}>
              <div className={s.priceContainer}>
                <div className={s.priceContent}>
                  <sup className={c.priceSign}>$</sup>
                  <span className={c.priceValue}>{item.node.price}</span><span className={c.priceUnit}>AUD/night</span>
                </div>
              </div>
              <img className={s.picture} src={item.node.image} alt={item.node.name} />
            </div>
            <h1 className={s.title}>{item.node.name}</h1>
            <span>{item.node.guestCount} Guests · {item.node.bedroomCount} Bedrooms · {item.node.bedCount} Beds</span>
          </div>
        ))}
      </div>
    );
  }
}

export default withStyles(c, s)(Tiles);
