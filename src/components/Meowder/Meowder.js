import React from 'react';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Meowder.css';
import Link from '../Link';
import Meowvigation from '../Meowvigation';
import logoUrl from './logo.png';

class Meowder extends React.Component {
  render() {
    return (
      <div className={s.root}>
        <div className={s.container}>
          <Meowvigation />
          <Link className={s.brand} to="/">
            <img src={logoUrl} width="100" alt="Bro, can you not." />
            <div className={s.brandTxt}>Bro, can you not.</div>
          </Link>
        </div>
      </div>
    );
  }
}

export default withStyles(s)(Meowder);
