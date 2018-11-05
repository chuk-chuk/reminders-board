import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Loader from '../components/Loader';
import Footer from '../components/Footer';

import * as actions from '../reducers/users/actions';

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
    }, 250);
  }

  render() {
    const { children } = this.props;
    const { loading } = this.state;
    
    return (
      <Loader loading={loading}>
          <main>
          {children}
          </main>
        <Footer />
      </Loader>
    );
  }
}

ReminderApp.propTypes = {
  children: PropTypes.node,
  actions: PropTypes.objectOf(PropTypes.func).isRequired
};

export default connect(
  state => ({}),
  dispatch => ({
    actions: bindActionCreators(actions, dispatch)
  })
)(ReminderApp);