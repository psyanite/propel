import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import graphqlify from 'graphqlify';
import s from './Listings.css';
import List from '../../../components/Listings/List';
import Thumbnails from '../../../components/Listings/Thumbnails';
import Tiles from '../../../components/Listings/Tiles';
import Filters from '../../../components/Listings/Filters';

// todo: update propTypes
// todo: refactor nav into nav component

const isNonEmptyArray = item => Array.isArray(item) && item.length > 0;

class Listings extends React.Component {
  static propTypes = {
    filters: PropTypes.shape().isRequired,
    listings: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
      }),
    ).isRequired,
    params: PropTypes.shape({
      districtId: PropTypes.any,
      suburbId: PropTypes.any,
    }).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      view: 'tiles',
      params: props.params,
      listings: props.listings,
    };
  }

  changeView = newView => this.setState({ view: newView });

  handleFilterRefine = async graphqlBody => {
    const resp = await fetch('/graphql ', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query: graphqlBody }),
    });
    const { data } = await resp.json();
    this.setState({ listings: data.listings });
  };

  render() {
    const { listings } = this.state;
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
            initSelected={this.props.params}
            data={this.props.filters}
            handleRefine={this.handleFilterRefine}
          />
        </div>
        <div className={s.floor}>{view}</div>
      </div>
    );
  }
}

export default withStyles(s)(Listings);
