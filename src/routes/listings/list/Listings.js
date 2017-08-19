import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Listings.css';
import List from '../../../components/Listings/List';
import Thumbnails from '../../../components/Listings/Thumbnails';
import Tiles from '../../../components/Listings/Tiles';
import {
  Tiles as TilesIcon,
  List as ListIcon,
  Thumbnails as ThumbnailsIcon,
} from '../../../components/Icons/Icons';

// todo: update propTypes
// todo: refactor nav into nav component

class Listings extends React.Component {
  static propTypes = {
    listings: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
    params: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      view: 'tiles',
      params: props.params,
    };
  }

  changeView(newView) {
    this.setState({ view: newView });
  }

  render() {
    const listings = this.props.listings;
    let view = <List listings={listings} />;
    switch (this.state.view) {
      case 'tiles':
        view = <Tiles listings={listings} />;
        break;
      case 'thumbnails':
        view = <Thumbnails listings={listings} />;
        break;
      default:
        view = <List listings={listings} />;
        break;
    }
    return (
      <div className={s.wrap}>
        <div className={s.floor}>
          <div className={s.navvi}>
            <div className={s.filters}>
              <button className={s.filter}>
                <span>Location</span>
                <span className={s.chevron}>
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M16.291 4.295a1 1 0 1 1 1.414 1.415l-8 7.995a1 1 0 0 1-1.414 0l-8-7.995a1 1 0 1 1 1.414-1.415l7.293 7.29 7.293-7.29z" />
                  </svg>
                </span>
              </button>
              <button className={s.filter}>
                <span>Property type</span>
                <span className={s.chevron}>
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M16.291 4.295a1 1 0 1 1 1.414 1.415l-8 7.995a1 1 0 0 1-1.414 0l-8-7.995a1 1 0 1 1 1.414-1.415l7.293 7.29 7.293-7.29z" />
                  </svg>
                </span>
              </button>
              <button className={s.filter}>
                <span>Price range</span>
                <span className={s.chevron}>
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M16.291 4.295a1 1 0 1 1 1.414 1.415l-8 7.995a1 1 0 0 1-1.414 0l-8-7.995a1 1 0 1 1 1.414-1.415l7.293 7.29 7.293-7.29z" />
                  </svg>
                </span>
              </button>
              <button className={s.filter}>
                <span>More filters</span>
                <span className={s.chevron}>
                  <svg
                    viewBox="0 0 18 18"
                    role="presentation"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path d="M16.291 4.295a1 1 0 1 1 1.414 1.415l-8 7.995a1 1 0 0 1-1.414 0l-8-7.995a1 1 0 1 1 1.414-1.415l7.293 7.29 7.293-7.29z" />
                  </svg>
                </span>
              </button>
            </div>
            <div className={s.views}>
              <button id="tiles-view" onClick={() => this.changeView('tiles')}>
                <TilesIcon />
              </button>
              <button
                id="thumbnails-view"
                onClick={() => this.changeView('thumbnails')}
              >
                <ThumbnailsIcon />
              </button>
              <button id="list-view" onClick={() => this.changeView('list')}>
                <ListIcon />
              </button>
            </div>
          </div>
          {view}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Listings);
