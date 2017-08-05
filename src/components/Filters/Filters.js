import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Filters.css';
import Filter from './Filter/Filter';

class Filters extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.string,
      })).isRequired,
    })).isRequired,
  };

  constructor(props) {
    super(props);
    this.buildParameters(props.options);
    // console.log(props.options);
    // const meow = this.props.options.map((options) => {
    //   console.log(options.id);
    //   console.log(options.options);
    //   return '';
    // });
  }

  buildParameters = (options) => {
    const params = {};
    Object.keys(options).forEach((key) => {
      params[options[key].id] = '';
    });
    this.state = {
      parameters: params,
    };
  };

  updateParameters = (value, type) => {
    const updatedParameters = Object.assign(this.state.parameters, { [type]: value });
    this.setState({ parameters: updatedParameters });
  };

  convertToTitleCase = (value) => {
    const spaceAdded = value.replace(/([A-Z])/g, ' $1');
    return spaceAdded.charAt(0).toUpperCase() + spaceAdded.slice(1);
  };

  render() {
    return (
      <div className="container">
        {this.props.options.map(options => (
          <Filter
            key={options.id}
            id={options.id}
            label={options.id}
            options={options.options}
            currentValue={this.state.parameters[options.id]}
            onSelectChange={this.updateParameters}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(s)(Filters);
