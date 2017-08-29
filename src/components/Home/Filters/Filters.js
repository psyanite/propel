/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import rSelectStyles from 'react-select/dist/react-select.css';
import customRSelectStyles from '../../../../customStyles/rSelect.css';
import Filter from './Filter';
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

const defaultDistrictId = 4;

const getDefaultSuburbFilter = districtFilters =>
  districtFilters[defaultDistrictId];

const buildFilters = (data, districtFilters) => {
  const filters = {};
  filters.district = buildDistrictsFilter(data.districts);
  filters.suburb = getDefaultSuburbFilter(districtFilters);
  return filters;
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
    }).isRequired,
    onUpdateSelectedValues: PropTypes.func.isRequired,
  };

  // todo: absolute abomination
  constructor(props) {
    super(props);
    const data = this.props.data;
    const districtFilters = buildDistrictFilters(data.districts);
    const filters = buildFilters(data, districtFilters);
    const selectedValues = buildSelectedValues(filters);
    this.props.onUpdateSelectedValues(selectedValues);
    this.state = { selectedValues, filters, districtFilters };
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
        <Filter
          key={filters.district.id}
          filter={filters.district}
          onChange={this.onChange}
          selectedValues={this.state.selectedValues[filters.district.id]}
        />
        <Filter
          key={filters.suburb.id}
          filter={filters.suburb}
          onChange={this.onChange}
          selectedValues={this.state.selectedValues[filters.suburb.id]}
        />
      </div>
    );
  }
}

export default withStyles(rSelectStyles, customRSelectStyles, s)(Filters);
