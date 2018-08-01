import React from 'react';
import PropTypes from 'prop-types';
import graphqlify from 'graphqlify';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import rSelectStyles from 'react-select/dist/react-select.css';
import {
  List as ListIcon,
  Thumbnails as ThumbnailsIcon,
  Tiles as TilesIcon,
} from '../../../components/Icons';
import { ListingFilter } from '../../Filters/Filter';
import s from './Filters.css';

const isNonEmptyArray = item =>
  typeof item !== 'undefined' && Array.isArray(item) && item.length > 0;

const buildDistrictsFilter = districts => {
  const filter = {
    id: 'districtId',
    placeholder: 'Select district',
    options: [],
    isMulti: true,
    styleName: 'district',
  };
  districts.forEach(district => {
    filter.options.push({
      label: district.name,
      value: district.id,
    });
  });
  filter.options.unshift({ label: 'All districts', value: '' });
  return { district: filter };
};

const buildDistrictSuburbOptions = districts => {
  const options = {};
  districts.forEach(district => {
    options[district.id] = district.suburbs.map(suburb => ({
      label: suburb.name,
      value: suburb.id,
      districtId: district.id,
    }));
  });
  return options;
};

const buildPriceFilters = () => {
  const filters = {};
  filters.priceMin = {
    id: 'priceMin',
    isMulti: false,
    options: [
      { label: 'Any', value: '' },
      { label: '$50,000', value: 50000 },
      { label: '$100,000', value: 100000 },
      { label: '$150,000', value: 150000 },
      { label: '$200,000', value: 200000 },
      { label: '$250,000', value: 250000 },
      { label: '$300,000', value: 300000 },
    ],
    placeholder: 'Minimum value',
    styleName: 'priceMin',
  };
  filters.priceMax = {
    id: 'priceMax',
    isMulti: false,
    options: [
      { label: 'Any', value: '' },
      { label: '$50,000', value: 50000 },
      { label: '$100,000', value: 100000 },
      { label: '$150,000', value: 150000 },
      { label: '$200,000', value: 200000 },
      { label: '$250,000', value: 250000 },
      { label: '$300,000', value: 300000 },
      { label: '$400,000', value: 400000 },
      { label: '$500,000', value: 500000 },
      { label: '$600,000', value: 600000 },
    ],
    placeholder: 'Maximum value',
    styleName: 'priceMax',
  };
  return filters;
};

const buildPropertyKindIdFilter = propertyKindIds => {
  const filter = {};
  filter.propertyKindId = {
    id: 'propertyKindId',
    isMulti: true,
    options: [],
    placeholder: 'All property types',
    styleName: 'propertyKindId',
  };
  propertyKindIds.forEach(propertyKindId => {
    filter.propertyKindId.options.push({
      label: propertyKindId.name,
      value: propertyKindId.id,
    });
  });
  filter.propertyKindId.options.unshift({
    label: 'All property types',
    value: '',
  });
  return filter;
};

const getTargetedDistrictIds = initSelected => {
  if ('districtId' in initSelected) {
    if (Array.isArray(initSelected.districtId)) {
      return initSelected.districtId;
    }
    return [initSelected.districtId];
  }
  return null;
};

const buildSelectedValues = (initSelected, filters) => {
  const selectedValues = {};

  const targetedDistrictIds = getTargetedDistrictIds(initSelected);
  selectedValues.districtId = filters.district.options.filter(option =>
    targetedDistrictIds.includes(option.value),
  );

  selectedValues.suburbId = [];
  if ('suburbId' in initSelected && isNonEmptyArray(initSelected.suburbId)) {
    initSelected.suburbId.forEach(id => {
      const newOption = filters.suburb.options.find(
        option => option.value === id,
      );
      if (typeof newOption !== 'undefined') {
        selectedValues.suburbId.push(newOption);
      }
    });
  }

  // todo: these other values could possibly also be initialized
  selectedValues.priceMin = null;
  selectedValues.priceMax = null;
  selectedValues.propertyKindId = [];

  return selectedValues;
};

const buildSuburbFilter = (targetedDistrictIds, districtSuburbs) => {
  const filter = {
    id: 'suburbId',
    placeholder: 'Search by suburb',
    options: [],
    isMulti: true,
    styleName: 'suburb',
  };
  targetedDistrictIds.forEach(districtId => {
    filter.options = Object.assign(filter.options, districtSuburbs[districtId]);
  });
  filter.options.unshift({ label: 'All suburbs', value: '' });
  return { suburb: filter };
};

const buildFilters = (data, districtSuburbs, initSelected) =>
  Object.assign(
    {},
    buildDistrictsFilter(data.districts),
    buildSuburbFilter(getTargetedDistrictIds(initSelected), districtSuburbs),
    buildPriceFilters(),
    buildPropertyKindIdFilter(data.propertyTypes),
  );

const isBlank = selectedValues =>
  Object.keys(selectedValues).every(
    key => !selectedValues[key] || !selectedValues[key].length,
  );

const buildGraphqlParams = selectedValues => {
  const params = {};
  Object.keys(selectedValues).forEach(key => {
    const item = selectedValues[key];
    if (isNonEmptyArray(item)) {
      params[key] = item.map(value => value.value);
    } else if (item && 'value' in item && item.value !== '') {
      params[key] = item.value;
    }
  });
  return params;
};

const buildGraphqlBody = selectedValues => {
  const fields = {
    id: {},
    name: {},
    suburb: {
      fields: {
        name: {},
      },
    },
    propertyKind: {
      fields: {
        name: {},
      },
    },
    price: {},
    guestCount: {},
    bedroomCount: {},
    bedCount: {},
    link: {},
    image: {},
    description: {},
  };

  if (isBlank(selectedValues)) {
    return graphqlify({
      listings: {
        field: 'allListings',
        fields,
      },
    });
  }

  return graphqlify({
    listings: {
      field: 'listingSearch',
      params: buildGraphqlParams(selectedValues),
      fields,
    },
  });
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
      propertyTypes: PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          name: PropTypes.string.isRequired,
        }).isRequired,
      ).isRequired,
    }).isRequired,
    handleRefine: PropTypes.func.isRequired,
    initSelected: PropTypes.shape().isRequired,
  };

  // todo: absolute abomination
  constructor(props) {
    super(props);
    this.districtSuburbs = buildDistrictSuburbOptions(props.data.districts);
    const filters = buildFilters(
      props.data,
      this.districtSuburbs,
      props.initSelected,
    );
    const selectedValues = buildSelectedValues(props.initSelected, filters);
    this.state = { selectedValues, filters };
  }

  districtSuburbs = null;

  handleRefine = () =>
    this.props.handleRefine(buildGraphqlBody(this.state.selectedValues));

  handleChange = (kind, newItems) => {
    const { selectedValues } = this.state;
    if (kind === 'districtId' && selectedValues[kind] !== newItems) {
      this.updateDistrict(kind, newItems);
    }
    selectedValues[kind] = newItems;
    this.updateSelectedValues(selectedValues);
  };

  // todo: i haf no idea wat dis does lol
  updateDistrict = (kind, newDistricts) => {
    if (Array.isArray(newDistricts)) {
      const { selectedValues } = this.state;
      const newDistrictsIds = newDistricts.map(district => district.value);
      selectedValues.suburbId = selectedValues.suburbId.filter(suburb =>
        newDistrictsIds.includes(suburb.districtId),
      );

      const { filters } = this.state;
      let suburbOptions = [];
      newDistricts.forEach(district => {
        suburbOptions = suburbOptions.concat(
          this.districtSuburbs[district.value],
        );
      });
      filters.suburb.options = suburbOptions;
    } else {
      this.state.filters.suburb.options = [];
      this.state.selectedValues.suburbId = [];
    }
  };

  updateSelectedValues = selectedValues => {
    this.setState({ selectedValues });
  };

  render() {
    const { filters } = this.state;
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
            <ListingFilter
              key={filters.district.id}
              filter={filters.district}
              onChange={this.handleChange}
              selectedValues={this.state.selectedValues[filters.district.id]}
            />
          </div>
          <div className={s.filter}>
            <h1>Suburb</h1>
            <ListingFilter
              key={filters.suburb.id}
              filter={filters.suburb}
              onChange={this.handleChange}
              selectedValues={this.state.selectedValues[filters.suburb.id]}
            />
          </div>
          <div className={s.filter}>
            <h1>Price</h1>
            <ListingFilter
              key={filters.priceMin.id}
              filter={filters.priceMin}
              onChange={this.handleChange}
              selectedValues={this.state.selectedValues[filters.priceMin.id]}
            />
            <ListingFilter
              key={filters.priceMax.id}
              filter={filters.priceMax}
              onChange={this.handleChange}
              selectedValues={this.state.selectedValues[filters.priceMax.id]}
            />
          </div>
          <div className={s.filter}>
            <h1>Property type</h1>
            <ListingFilter
              key={filters.propertyKindId.id}
              filter={filters.propertyKindId}
              onChange={this.handleChange}
              selectedValues={
                this.state.selectedValues[filters.propertyKindId.id]
              }
            />
          </div>
        </div>

        <button className={s.refine} onClick={this.handleRefine}>
          Refine
          <svg
            viewBox="0 0 444.819 444.819"
            role="presentation"
            focusable="false"
          >
            <path
              d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264
                  c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168
                  c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413
                  c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864
                  c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"
            />
          </svg>
        </button>
      </div>
    );
  }
}

export default withStyles(rSelectStyles, s)(Filters);
