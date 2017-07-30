import React from "react";
import PropTypes from "prop-types";
import withStyles from "isomorphic-style-loader/lib/withStyles";
import s from "./Filters.css";
import Filter from "./Filter/Filter";

class Filters extends React.Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filters: {
        bender: '',
        nation: '',
      },
      multiple: false,
    };
  }

  filterItems = (value, type) => {
    switch (type) {
      case 'bender':
        this.setState({bender: value});
        break;
      case 'nation':
        this.setState({nation: value});
        break;
      default:
        break;
    }
  }

  render() {
    let filteredItems = this.props.data;
    const state = this.state;
    const filterProperties = ['bender', 'nation'];
    filterProperties.forEach((filterBy) => {
      const filterValue = state[filterBy];
      if (filterValue) {
        filteredItems = filteredItems.filter(item => item[filterBy] === filterValue);
      }
    });
    const benderOptions = [...new Set(this.props.data.map(item => item.bender))];
    const nationOptions = [...new Set(this.props.data.map(item => item.nation))];
    const filters = [
      {
        id: 'bender',
        label: 'Bender',
        options: benderOptions,
        currentValue: this.state.filters.bender,
      },
      {
        id: 'nation',
        label: 'Nation',
        options: nationOptions,
        currentValue: this.state.filters.nation,
      },
    ];
    return (
      <div className="container">
        {filters.map(filter => (
          <Filter
            key={filter.id}
            id={filter.id}
            label={filter.label}
            options={filter.options}
            currentValue={filter.currentValue}
            onOptionChange={this.filterItems}
          />
        ))}
        <div className="filter-items">
          {filteredItems.map(item => <div className="filter-item" key={item.name}>{item.name}</div>)}
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Filters);
