import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Loader from '../components/Loader';
import Header from '../components/Header';
import Footer from '../components/Footer';
class ReminderApp extends Component {
  constructor() {
    super();
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        loading: false
      })
    }, 500);
  }

  render() {
    const { children } = this.props;
    const { loading } = this.state;
    
    return (
      <Loader loading={loading}>
        <Header />
          <main>
          {children}
          </main>
        <Footer />
      </Loader>
    );
  }
}

ReminderApp.propTypes = {
  children: PropTypes.node
};

export default ReminderApp;