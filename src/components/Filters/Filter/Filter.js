/* eslint-disable css-modules/no-unused-class */
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import rSelectStyles from 'react-select/dist/react-select.css';
import customRSelectStyles from '../../../../customStyles/r-select.css';
import homeSelectStyles from '../../../../customStyles/home-r-select.css';
import s from './Filter.css';

/**
 * Custom filter component, a wrap-around Jed's Select
 * It has custom styles, and Jed's Select did not have a 'Select All' option,
 * which is why I had to develop this custom Filter.
 */
class Filter extends React.Component {
  static propTypes = {
    filter: PropTypes.shape({
      id: PropTypes.string.isRequired,
      placeholder: PropTypes.string.isRequired,
      isMulti: PropTypes.bool.isRequired,
      options: PropTypes.arrayOf(
        PropTypes.shape({
          label: PropTypes.string.isRequired,
          value: PropTypes.any.isRequired,
        }),
      ).isRequired,
    }).isRequired,
    onChange: PropTypes.func.isRequired,
  };

  onChange = incoming => {
    let selectedValues = incoming;
    if (Array.isArray(incoming)) {
      selectedValues = this.processIncoming(incoming);
    }
    this.props.onChange(this.props.filter.id, selectedValues);
  };

  setOptionsDisabled = isDisabled => {
    this.props.filter.options = this.props.filter.options.map(option => {
      const item = option;
      item.disabled = isDisabled;
      return item;
    });
  };

  processIncoming = items => {
    let selectedValues = items;
    const any = items.find(item => item.value === '');
    if (any) {
      selectedValues = any;
      this.setOptionsDisabled(true);
    } else if (items.length === 0) {
      this.setOptionsDisabled(false);
    }
    return selectedValues;
  };

  render() {
    const { filter } = this.props;
    return (
      <div className={s.root}>
        <Select
          key={filter.id}
          name={filter.id}
          multi={filter.isMulti}
          value={this.props.selectedValues}
          options={filter.options}
          onChange={this.onChange}
          placeholder={filter.placeholder}
          className={filter.styleName}
        />
      </div>
    );
  }
}

/**
 * todo: absolutely ridiculous
 * find out how to style properly https://react-select.com/styles
 * the problem was that react-select would have its custom styles, but I was using PostCSS, and webpack
 * would compile my CSS for me so I had to at first this worked with my select class parameters, but for some reason
 * after I deployed to Heroku it would no longer work.
 */
export const HomeFilter = withStyles(
  rSelectStyles,
  customRSelectStyles,
  homeSelectStyles,
  s,
)(Filter);

export const ListingFilter = withStyles(rSelectStyles, customRSelectStyles, s)(
  Filter,
);
