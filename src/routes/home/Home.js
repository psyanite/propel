/* eslint-disable class-methods-use-this */

import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import qs from 'qs';
import s from './Home.css';
import logoUrl from './logo.png';
import history from '../../history';
import Filters from '../../components/Filters/';

class Home extends React.Component {
  // static propTypes = {
  //   filterOptions: PropTypes.arrayOf(PropTypes.object).isRequired,
  // };

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     params: {
  //       areaId: [],
  //     },
  //   };
  // }

  // search = (e) => {
  //   e.preventDefault();
  //   if (this.state && this.state.params) {
  //     console.log(this.state.params);
  //     history.push(`/listings?${qs.stringify(this.state.params)}`);
  //   }
  // };
  //
  // onSelectChange = (type, value) => {
  //   // case switch for type
  //   const params = { params:
  //     { areaId: [Number(value)] },
  //   };
  //   this.setState(params);
  // };

  render() {
    // const options = [].concat(...this.props.filterOptions.map(filter => (
    //   Object.keys(filter).map(key => ({ id: key, options: filter[key] }))
    // )));
    return (
      <div>
      {/*<div className={s.root}>*/}
        {/*<div className={s.meow}>*/}
          <h1>{this.props.title}</h1>
          {/*<img className={s.bro} src={logoUrl} alt="Bro, can you not." />*/}
          {/*<form className={s.search} onSubmit={this.search}>*/}
            {/*<Filters options={options} onSelectChange={this.onSelectChange} />*/}
            {/*/!* <input className={s.bar} type="search" results="5" name="suburb" placeholder="Search by suburb" /> *!/*/}
            {/*<button className={s.go} type="submit">*/}
              {/*<svg viewBox="0 0 444.819 444.819" role="presentation" focusable="false"><path*/}
                {/*d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264*/}
                {/*c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168*/}
                {/*c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413*/}
                {/*c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864*/}
                {/*c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"*/}
              {/*/></svg>*/}
            {/*</button>*/}
          {/*</form>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default withStyles(s)(Home);

