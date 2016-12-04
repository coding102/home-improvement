import React, { Component } from 'react';
import './App.css';

import { Link } from 'react-router'


class App extends Component {
	render() {
    	return (
    		<div className="container">

      			<div className="nav">
				  	<div className="nav-content">
						<ul>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/about">About Us</Link></li>
							<li><Link to="/services">Services</Link></li>
							<li><Link to="/other">Other Services</Link></li>
							<li><Link to="/work">Our Work</Link></li>
							<li><Link to="/contact">Contact Us</Link></li>
						</ul>
					</div>
				</div>

				<div>
          			{this.props.children}
				</div>

      		</div>
    	);
  	}
}

export default App;
