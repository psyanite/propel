/* eslint-disable arrow-parens */
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Filter.css';

class Filter extends React.Component {
  static propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    options: PropTypes.arrayOf(PropTypes.string).isRequired,
    currentValue: PropTypes.string.isRequired,
    onOptionChange: PropTypes.func.isRequired,
  };

  onOptionChange = (type) => (e) => {
    const value = e.target.value;
    this.props.onOptionChange(value, type);
  };

  render() {
    const id = this.props.id;
    return (
      <div className={s.root}>
        <span>{this.props.label}</span>
        <select id={id} value={this.props.currentValue} onChange={this.onOptionChange(id)}>
          {this.props.options.map(option => <option key={option} value={option}>{option}</option>)}
        </select>
      </div>
    );
  }
}

export default withStyles(s)(Filter);
