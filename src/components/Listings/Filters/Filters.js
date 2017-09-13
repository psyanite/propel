import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import rSelectStyles from 'react-select/dist/react-select.css';
import {
  List as ListIcon,
  Thumbnails as ThumbnailsIcon,
  Tiles as TilesIcon,
} from '../../../components/Icons';
import Filter from '../../Filters/Filter';
import s from './Filters.css';

const buildDistrictsFilter = districts => {
  const filter = {
    id: 'districtId',
    placeholder: 'Select district',
    options: [],
    isMulti: false,
    styleName: 'district',
  };
  districts.forEach(district => {
    filter.options.push({
      label: district.name,
      value: district.id,
    });
  });
  filter.options.unshift({ label: 'All districts', value: '' });
  return filter;
};

const buildSuburbFilter = suburbs => {
  const filter = {
    id: 'suburbId',
    placeholder: 'Search by suburb',
    options: [],
    isMulti: true,
    styleName: 'suburb',
  };
  suburbs.forEach(suburb => {
    filter.options.push({
      label: suburb.name,
      value: suburb.id,
    });
  });
  filter.options.unshift({ label: 'All suburbs', value: '' });
  return filter;
};

const buildDistrictFilters = districts => {
  const filters = {};
  districts.forEach(district => {
    filters[district.id] = buildSuburbFilter(district.suburbs);
  });
  return filters;
};

const buildPriceFilters = () => {
  const filters = {};
  filters.priceMin = {
    id: 'priceMin',
    isMulti: false,
    options: [
      { label: 'Any', value: '' },
      { label: '$50,000', value: '50000' },
      { label: '$100,000', value: '100000' },
      { label: '$150,000', value: '150000' },
      { label: '$200,000', value: '200000' },
      { label: '$250,000', value: '250000' },
      { label: '$300,000', value: '300000' },
    ],
    placeholder: 'Minimum value',
    styleName: 'priceMin',
  };
  filters.priceMax = {
    id: 'priceMax',
    isMulti: false,
    options: [
      { label: 'Any', value: '' },
      { label: '$50,000', value: '50000' },
      { label: '$100,000', value: '100000' },
      { label: '$150,000', value: '150000' },
      { label: '$200,000', value: '200000' },
      { label: '$250,000', value: '250000' },
      { label: '$300,000', value: '300000' },
      { label: '$400,000', value: '400000' },
      { label: '$500,000', value: '500000' },
      { label: '$600,000', value: '600000' },
    ],
    placeholder: 'Maximum value',
    styleName: 'priceMax',
  };
  return filters;
};

const buildPropTypeFilter = propTypes => {
  const filter = {};
  filter.propType = {
    id: 'propType',
    isMulti: true,
    options: [],
    placeholder: 'All property types',
    styleName: 'propType',
  };
  propTypes.forEach(propType => {
    filter.propType.options.push({
      label: propType.name,
      value: propType.id,
    });
  });
  filter.propType.options.unshift({ label: 'All property types', value: '' });
  return filter;
};

const defaultDistrictId = 4;

const getDefaultSuburbFilter = districtFilters =>
  districtFilters[defaultDistrictId];

const buildFilters = (data, districtFilters, priceFilters, propTypeFilters) => {
  let filters = {};
  filters.district = buildDistrictsFilter(data.districts);
  filters.suburb = getDefaultSuburbFilter(districtFilters);
  filters = Object.assign({}, filters, priceFilters, propTypeFilters);
  // console.log('buildFilters() meow');
  // console.log(priceFilters);
  // console.log(propTypeFilters);
  // console.log(filters);
  return filters;
};

const buildSelectedValues = filters => {
  const selectedValues = {};
  selectedValues.districtId = filters.district.options.find(
    option => option.value === defaultDistrictId,
  );
  selectedValues.suburbId = null;
  return selectedValues;
};

class Filters extends React.Component {
  static propTypes = {
    data: PropTypes.shape({
      districts: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
          suburbs: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.number.isRequired,
              name: PropTypes.string.isRequired,
            }).isRequired,
          ).isRequired,
        }).isRequired,
      ).isRequired,
      propTypes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    onUpdateSelectedValues: PropTypes.func.isRequired,
  };

  // todo: absolute abomination
  constructor(props) {
    super(props);
    const data = this.props.data;
    const districtFilters = buildDistrictFilters(data.districts);
    const priceFilters = buildPriceFilters();
    const propTypeFilters = buildPropTypeFilter(data.propTypes);
    const filters = buildFilters(
      data,
      districtFilters,
      priceFilters,
      propTypeFilters,
    );
    const selectedValues = buildSelectedValues(filters);
    this.props.onUpdateSelectedValues(selectedValues);
    this.state = { selectedValues, filters, districtFilters };
    // console.log('constructor meow filters:');
    // console.log(filters);
  }

  onDistrictChange = (kind, item) => {
    const filters = this.state.filters;
    filters.suburb = this.state.districtFilters[item.value];
    this.setState({ filters });

    const selectedValues = this.state.selectedValues;
    selectedValues.suburbId = [];
    this.setState({ selectedValues });
  };

  onChange = (kind, item) => {
    console.log(kind);
    console.log(item);
    const selectedValues = this.state.selectedValues;
    if (kind === 'districtId' && selectedValues[kind] !== item) {
      this.onDistrictChange(kind, item);
    }
    selectedValues[kind] = item;
    this.updateSelectedValues(selectedValues);
  };

  updateSelectedValues = selectedValues => {
    this.setState({ selectedValues });
    this.props.onUpdateSelectedValues(selectedValues);
  };

  render() {
    const filters = this.state.filters;
    return (
      <div className={s.root}>
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

        <div className={s.filters}>
          <div className={s.filter}>
            <h1>District</h1>
            <Filter
              key={filters.district.id}
              filter={filters.district}
              onChange={this.onChange}
              selectedValues={this.state.selectedValues[filters.district.id]}
            />
          </div>
          <div className={s.filter}>
            <h1>Suburb</h1>
            <Filter
              key={filters.suburb.id}
              filter={filters.suburb}
              onChange={this.onChange}
              selectedValues={this.state.selectedValues[filters.suburb.id]}
            />
          </div>
          <div className={s.filter}>
            <h1>Price</h1>
            <Filter
              key={filters.priceMin.id}
              filter={filters.priceMin}
              onChange={this.onChange}
              selectedValues={this.state.selectedValues[filters.priceMin.id]}
            />
            <Filter
              key={filters.priceMax.id}
              filter={filters.priceMax}
              onChange={this.onChange}
              selectedValues={this.state.selectedValues[filters.priceMax.id]}
            />
          </div>
          <div className={s.filter}>
            <h1>Property type</h1>
            <Filter
              key={filters.propType.id}
              filter={filters.propType}
              onChange={this.onChange}
              selectedValues={this.state.selectedValues[filters.propType.id]}
            />
          </div>
        </div>

        <button className={s.refine}>
          Refine
          <svg
            viewBox="0 0 444.819 444.819"
            role="presentation"
            focusable="false"
          >
            <path d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264
                  c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168
                  c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413
                  c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864
                  c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z" />
          </svg>
        </button>
      </div>
    );
  }
}

export default withStyles(rSelectStyles, s)(Filters);
