import React from 'react';
import { render } from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import App from './App';
import Home from './components/Home';
import About from './components/About';
import notFound from './components/notFound';
import './index.css';


render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      
      <Route path="about" component={About}/>
      <Route path="*" component={notFound}/>
    </Route>
  </Router>
), document.getElementById('root'))
