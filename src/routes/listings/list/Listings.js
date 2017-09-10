import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Listings.css';
import List from '../../../components/Listings/List';
import Thumbnails from '../../../components/Listings/Thumbnails';
import Tiles from '../../../components/Listings/Tiles';
import Filters from '../../../components/Listings/Filters';

// todo: update propTypes
// todo: refactor nav into nav component

class Listings extends React.Component {
  static propTypes = {
    filters: PropTypes.shape().isRequired,
    listings: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
    params: PropTypes.shape({
      districtId: PropTypes.array.isRequired,
      suburbId: PropTypes.array.isRequired,
    }).isRequired,
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

  updateParams = selectedValues => {
    const params = {
      districtId: selectedValues.districtId.value,
      suburbId: null,
    };
    const selectedSuburbs = selectedValues.suburbId;
    if (selectedSuburbs !== null) {
      if (Array.isArray(selectedSuburbs) && selectedSuburbs.length > 0) {
        params.suburbId = selectedValues.suburbId.map(value => value.value);
      } else if (selectedSuburbs.value !== undefined) {
        params.suburbId = selectedValues.suburbId.value;
      }
    }
    this.setState({ params });
  };

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
      <div className={s.root}>
        <div className={s.filters}>
          <Filters
            data={this.props.filters}
            onUpdateSelectedValues={this.updateParams}
          />
        </div>
        <div className={s.floor}>
          {view}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Listings);
