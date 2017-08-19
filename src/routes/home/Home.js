import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import logoUrl from './logo.png';
import history from '../../history';
import Filter from '../../components/Filter/';

// todo: update propTypes

class Home extends React.Component {
  static propTypes = {
    filters: PropTypes.arrayOf(PropTypes.object).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = this.buildParams(this.props.filters);
    console.log(this.state);
  }

  buildParams = filters => {
    const params = {};
    filters.forEach(filter => {
      params[filter.id] = [];
    });
    return { params };
  };

  updateParams = (id, items) => {
    const params = this.state.params;
    params[id] = items.map(item => item.value);
    this.setState({ params });
    console.log(this.state);
  };

  search = e => {
    e.preventDefault();
    console.log(this.state);
    if (this.state.params.areaId.length > 0) {
      history.push(`/listings?${queryString.stringify(this.state.params)}`);
    }
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.meow}>
          <img className={s.bro} src={logoUrl} alt="Bro, can you not." />
          <form className={s.search} onSubmit={this.search}>
            {this.props.filters.map(filter =>
              <Filter
                key={filter.id}
                filter={filter}
                onChange={this.updateParams}
              />,
            )}
            <button className={s.go} type="submit">
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
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);
