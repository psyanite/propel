/* eslint-disable class-methods-use-this */

import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Home.css';
import logoUrl from './logo.png';
import history from '../../history';
import Filters from '../../components/Filters/';


class Home extends React.Component {

  search() {
    history.push({
      pathname: '/listings',
    });
  }

  render() {
    const filterData = [
      { name: 'Aang', bender: 'yes', nation: 'Air', person: 'yes', show: 'ATLA' },
      { name: 'Appa', bender: 'yes', nation: 'Air', person: 'no', show: 'ATLA' },
      { name: 'Asami', bender: 'no', nation: 'Republic City', person: 'yes', show: 'LOK' },
      { name: 'Azula', bender: 'yes', nation: 'Fire', person: 'yes', show: 'ATLA' },
      { name: 'Bolin', bender: 'yes', nation: 'Earth', person: 'yes', show: 'LOK' },
      { name: 'Jinora', bender: 'yes', nation: 'Air', person: 'yes', show: 'LOK' },
      { name: 'Katara', bender: 'yes', nation: 'Water', person: 'yes', show: 'ATLA' },
      { name: 'Korra', bender: 'yes', nation: 'Water', person: 'yes', show: 'LOK' },
      { name: 'Lin Beifong', bender: 'yes', nation: 'Republic City', person: 'yes', show: 'LOK' },
      { name: 'Momo', bender: 'no', nation: 'Air', person: 'no', show: 'ATLA' },
      { name: 'Mai', bender: 'no', nation: 'Fire', person: 'yes', show: 'ATLA' },
      { name: 'Mako', bender: 'yes', nation: 'Fire', person: 'yes', show: 'LOK' },
      { name: 'Naga', bender: 'no', nation: 'Water', person: 'no', show: 'LOK' },
      { name: 'Pabu', bender: 'no', nation: 'Fire', person: 'no', show: 'LOK' },
      { name: 'Sokka', bender: 'no', nation: 'Water', person: 'yes', show: 'ATLA' },
      { name: 'Suki', bender: 'no', nation: 'Earth', person: 'yes', show: 'ATLA' },
      { name: 'Tenzin', bender: 'yes', nation: 'Air', person: 'yes', show: 'LOK' },
      { name: 'Toph Beifong', bender: 'yes', nation: 'Earth', person: 'yes', show: 'ATLA' },
      { name: 'Ty Lee', bender: 'no', nation: 'Fire', person: 'yes', show: 'ATLA' },
      { name: 'Uncle Iroh', bender: 'yes', nation: 'Fire', person: 'yes', show: 'ATLA' },
      { name: 'Varrick', bender: 'no', nation: 'Republic City', person: 'yes', show: 'LOK' },
      { name: 'Zhu Li', bender: 'no', nation: 'Republic City', person: 'yes', show: 'LOK' },
      { name: 'Zuko', bender: 'yes', nation: 'Fire', person: 'yes', show: 'ATLA' },
    ];
    return (
      <div className={s.root}>
        <Filters data={filterData} />
        <div className={s.meow}>
          <img className={s.bro} src={logoUrl} alt="Bro, can you not." />
          <form className={s.search} onSubmit={this.search}>
            <input className={s.bar} type="search" results="5" name="suburb" placeholder="Search by suburb" />
            <button className={s.go} type="submit">
              <svg viewBox="0 0 444.819 444.819" role="presentation" aria-hidden="true" focusable="false"><path
                d="M352.025,196.712L165.884,10.848C159.029,3.615,150.469,0,140.187,0c-10.282,0-18.842,3.619-25.697,10.848L92.792,32.264
                c-7.044,7.043-10.566,15.604-10.566,25.692c0,9.897,3.521,18.56,10.566,25.981l138.753,138.473L92.786,361.168
                c-7.042,7.043-10.564,15.604-10.564,25.693c0,9.896,3.521,18.562,10.564,25.98l21.7,21.413
                c7.043,7.043,15.612,10.564,25.697,10.564c10.089,0,18.656-3.521,25.697-10.564l186.145-185.864
                c7.046-7.423,10.571-16.084,10.571-25.981C362.597,212.321,359.071,203.755,352.025,196.712z"
              /></svg>
            </button>
          </form>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Home);

