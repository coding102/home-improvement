import React, { Component } from 'react';
import './App.css';

import { Link, IndexLink } from 'react-router'


class App extends Component {
	render() {
    	return (
			<div className="container">
				<div className="bs-example">
					<nav role="navigation" className="navbar navbar-default">
						<div className="navbar-header">
							<button type="button" data-target="#navbarCollapse" data-toggle="collapse" className="navbar-toggle">
								<span className="sr-only">Toggle navigation</span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
								<span className="icon-bar"></span>
							</button>
							<a href="#" className="navbar-brand">Brand</a>
						</div>

						<div id="navbarCollapse" className="collapse navbar-collapse">
							<ul className="nav navbar-nav">
								<li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
								<li><Link to="/about" activeClassName="active">About Us</Link></li>
								<li><Link to="/services" activeClassName="active">Services</Link></li>
								<li><Link to="/other" activeClassName="active">Other Services</Link></li>
								<li><Link to="/work" activeClassName="active">Our Work</Link></li>
								<li><Link to="/contact" activeClassName="active">Contact Us</Link></li>
							</ul>

						</div>
					</nav>
				</div>
				
				{this.props.children}

			</div>
    	);
  	}
}

export default App;
