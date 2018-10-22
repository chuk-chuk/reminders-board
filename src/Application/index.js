import React, { Component } from 'react';

import './styles.css';

class Application extends Component {
  render() {
    return (
      <div className="Application">
        <header className="Application-header">
          <img src="https://is3-ssl.mzstatic.com/image/thumb/Purple111/v4/f3/1a/37/f31a3705-2930-81ea-7267-e4ad36118ccb/source/256x256bb.jpg" alt="logo" />
          <p>
            The little book of abuse.
          </p>
        </header>
      </div>
    );
  }
}

export default Application;