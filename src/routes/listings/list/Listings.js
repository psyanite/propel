import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Listings.css';
import List from '../../../components/Listings/List';
import Thumbnails from '../../../components/Listings/Thumbnails';
import Tiles from '../../../components/Listings/Tiles';

// todo: remove repeating item.node
// todo: update propTypes
// todo: refactor nav into nav component

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(PropTypes.shape({
      node: PropTypes.shape.isRequired,
    })).isRequired,
  };

  render() {
    return (
      <div className={s.wrap}>
        <div className={s.floor}>
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

          <List listings={this.props.listings} />

          <Thumbnails listings={this.props.listings} />

          <Tiles listings={this.props.listings} />

        </div>
      </div>
    );
  }
}

export default withStyles(s)(Listings);
