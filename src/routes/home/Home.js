import React from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import logoUrl from './logo.png';
import history from '../../history';
import Filters from '../../components/Home/Filters';

class Home extends React.Component {
  static propTypes = {
    // data: PropTypes.arrayOf(
    //   PropTypes.shape({
    //     id: PropTypes.string.isRequired,
    //     placeholder: PropTypes.string.isRequired,
    //     options: PropTypes.arrayOf(
    //       PropTypes.shape({
    //         label: PropTypes.string.isRequired,
    //         value: PropTypes.any.isRequired,
    //       }),
    //     ).isRequired,
    //   }),
    // ).isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      params: {
        districtId: null,
        suburbId: null,
      },
    };
  }

  updateParams = selectedValues => {
    const params = {
      districtId: selectedValues.districtId.value,
      suburbId: null,
    };
    const selectedSuburbs = selectedValues.suburbId;
    if (selectedSuburbs !== null) {
      if (Array.isArray(selectedSuburbs) && selectedSuburbs.length > 0) {
        params.suburbId = selectedValues.suburbId.map(value => value.value);
      } else if (selectedSuburbs.value !== undefined) {
        params.suburbId = selectedValues.suburbId.value;
      }
    }
    this.setState({ params });
  };

  search = e => {
    e.preventDefault();
    const params = this.state.params;
    if (params.districtId !== null && params.suburbId !== null) {
      const queryParams = this.buildQueryParams();
      history.push(`/listings?${queryString.stringify(queryParams)}`);
    }
  };

  buildQueryParams = () => {
    const params = this.state.params;
    const queryParams = {};
    Object.keys(params).forEach(key => {
      if (params[key] !== null && params[key] !== '') {
        queryParams[key] = params[key];
      }
    });
    return queryParams;
  };

  render() {
    return (
      <div className={s.root}>
        <div className={s.meow}>
          <img className={s.bro} src={logoUrl} alt="Bro, can you not." />
          <form className={s.search} onSubmit={this.search}>
            <Filters
              data={this.props.data}
              onUpdateSelectedValues={this.updateParams}
            />
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
