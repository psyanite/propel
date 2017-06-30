import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Listings.css';

// todo: Remove repeating item.node
// todo: Update propTypes

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.lWrap}>
        <div className={s.lFloor}>
          <div className={s.navvi}>
            <div className={s.filters}>
              <button className={s.filter}>
                <span>Location</span>
                <span className={s.chevron}><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M16.291 4.295a1 1 0 1 1 1.414 1.415l-8 7.995a1 1 0 0 1-1.414 0l-8-7.995a1 1 0 1 1 1.414-1.415l7.293 7.29 7.293-7.29z"></path></svg></span>
              </button>
              <button className={s.filter}>
                <span>Property type</span>
                <span className={s.chevron}><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M16.291 4.295a1 1 0 1 1 1.414 1.415l-8 7.995a1 1 0 0 1-1.414 0l-8-7.995a1 1 0 1 1 1.414-1.415l7.293 7.29 7.293-7.29z"></path></svg></span>
              </button>
              <button className={s.filter}>
                <span>Price range</span>
                <span className={s.chevron}><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M16.291 4.295a1 1 0 1 1 1.414 1.415l-8 7.995a1 1 0 0 1-1.414 0l-8-7.995a1 1 0 1 1 1.414-1.415l7.293 7.29 7.293-7.29z"></path></svg></span>
              </button>
              <button className={s.filter}>
                <span>More filters</span>
                <span className={s.chevron}><svg viewBox="0 0 18 18" role="presentation" aria-hidden="true" focusable="false"><path fill-rule="evenodd" d="M16.291 4.295a1 1 0 1 1 1.414 1.415l-8 7.995a1 1 0 0 1-1.414 0l-8-7.995a1 1 0 1 1 1.414-1.415l7.293 7.29 7.293-7.29z"></path></svg></span>
              </button>
            </div>
            <div className={s.views}>
              <button className={s.gridView}></button>
              <button className={s.listView}></button>
            </div>
          </div>


          <div className={s.grid}>
            <div className={s.gridHeader}>
              <span>Listing name</span>
              <span>Area</span>
              <span>Price</span>
              <span>Other</span>
              <hr />
            </div>

            {this.props.listings.map(item => (
              <div className={s.gridRow} key={item.node.id}>
                <span>{item.node.name}</span>
                <span>{item.node.area}</span>
                <span><sup className={s.pSign}>$</sup><span className={s.pValue}>{item.node.price}</span><span className={s.pUnit}>AUD/night</span></span>
                <span><span>{item.node.guestCount} Guests · {item.node.bedroomCount} Bedrooms · {item.node.bedCount} Beds</span></span>
                <hr />
              </div>
            ))}
          </div>


          <div className={s.thumbnailGrid}>
            {this.props.listings.map(item => (
              <div className={s.thumbnailGridRow} key={item.node.id}>
                <img className={s.picture} src={item.node.image} alt={item.node.name} />
                <span>{item.node.name}</span>
                <span>{item.node.area}</span>
                <span><sup className={s.pSign}>$</sup><span className={s.pValue}>{item.node.price}</span><span className={s.pUnit}>AUD/night</span></span>
                <span><span>{item.node.guestCount} Guests · {item.node.bedroomCount} Bedrooms · {item.node.bedCount} Beds</span></span>
                <hr />
              </div>
            ))}
          </div>

          {this.props.listings.map(item => (
            <div key={item.node.id} className={s.lTile}>
              <div className={s.carousel}>
                <div className={s.pContainer}>
                  <div className={s.pContent}>
                    <sup className={s.pSign}>$</sup>
                    <span className={s.pValue}>{item.node.price}</span><span className={s.pUnit}>AUD/night</span>
                  </div>
                </div>
                <img className={s.picture} src={item.node.image} alt={item.node.name} />
              </div>
              <h1 className={s.title}>{item.node.name}</h1>
              <span>{item.node.guestCount} Guests · {item.node.bedroomCount} Bedrooms · {item.node.bedCount} Beds</span>
            </div>
          ))}

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Listings);
