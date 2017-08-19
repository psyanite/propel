/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import rSelectStyles from 'react-select/dist/react-select.css';
import customRSelectStyles from '../../../customStyles/rSelect.css';
import s from './Filter.css';

class Filter extends React.Component {
  static propTypes = {
    filter: PropTypes.shape({
      id: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.number,
        }),
      ).isRequired,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = { selectedValues: [] };
  }

  onChange = items => {
    this.setState({ selectedValues: items });
    this.props.onChange(this.props.filter.id, items);
  };

  render() {
    const filter = this.props.filter;
    return (
      <div className={s.root}>
        <Select
          key={filter.id}
          name={filter.id}
          multi
          value={this.state.selectedValues}
          options={filter.options}
          onChange={this.onChange}
          placeholder={filter.placeholder}
          className={s.searchie}
        />
      </div>
    );
  }
}

export default withStyles(rSelectStyles, customRSelectStyles, s)(Filter);
