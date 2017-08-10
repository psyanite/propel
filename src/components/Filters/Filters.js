import React from 'react';
import PropTypes from 'prop-types';
import AutoComplete from 'react-autocomplete';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Filters.css';

class Filters extends React.Component {
  static propTypes = {
    options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      options: PropTypes.arrayOf(PropTypes.shape({
        kind: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        value: PropTypes.number,
      })).isRequired,
    })).isRequired,
    onSelect: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.buildParams(props.options);
  }

  onSelect = (value, item) => {
    const params = this.state.params;
    params[item.kind] = item;
    this.setState(params);
    this.props.onSelect(this.state.params);
  };

  buildParams = (options) => {
    const params = {};
    Object.keys(options).forEach((key) => {
      params[options[key].id] = options[key].options[0];
    });
    this.state = { params };
  };

  render() {
    const inputProps = { placeholder: 'Search by suburb' };
    return (
      <div className={s.root}>
        {this.props.options.map(option => (
          <AutoComplete
            inputProps={inputProps}
            key={option.id}
            getItemValue={item => item.name}
            items={option.options}
            renderItem={(item, isHighlighted) =>
              <div style={{ background: isHighlighted ? 'lightgray' : 'white' }}>
                {item.name}
              </div>
            }
            value={this.state.params[option.id].name}
            onSelect={this.onSelect}
          />
        ))}
      </div>
    );
  }
}

export default withStyles(s)(Filters);
