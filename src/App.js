import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router'


class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="primary-header"></header>
          
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
            </ul>

          {this.props.children}
      </div>
    );
  }
}

export default App;
