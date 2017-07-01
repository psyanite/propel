
import React from 'react';
import PropTypes from 'prop-types';
import withStyles from 'isomorphic-style-loader/lib/withStyles';
import s from './Meowout.css';
import Meowder from '../Meowder';
import Feedback from '../Feedback';
import Footer from '../Footer';

class Meowout extends React.Component {
  static propTypes = {
    children: PropTypes.node.isRequired,
  };

  render() {
    return (
      <div>
        <Meowder />
        {this.props.children}
        <Feedback />
        <Footer />
      </div>
    );
  }
}

export default withStyles(s)(Meowout);
