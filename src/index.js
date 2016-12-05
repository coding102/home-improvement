import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, IndexRoute } from 'react-router';


import App from './App';
import Home from './components/Home';
import About from './components/About';
import Services from './components/Services';
import Other from './components/Other';
import Work from './components/Work';
import Contact from './components/Contact';
import notFound from './components/notFound';

import './index.css';


ReactDOM.render((
  <Router history={browserHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      
      <Route path="about" component={About}/>
      <Route path="services" component={Services}/>
      <Route path="other" component={Other}/>
      <Route path="work" component={Work}/>
      <Route path="contact" component={Contact}/>
      <Route path="*" component={notFound}/>
    </Route>
  </Router>
), document.getElementById('root'))
