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
							<a href="#" className="navbar-brand">My Roofing Contractor</a>
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

				<div>
					<footer className="footer-distributed">

						<div className="footer-left">

							<h3>My Roofing<span>Contractor</span></h3>

							<p className="footer-company-name">My Roofing Contractor &copy; 2016</p>
						</div>

						<div className="footer-center">

							<div>
								<i className="fa fa-map-marker"></i>
								<p><span>Hamilton</span> New Jersey</p>
							</div>

							<div>
								<i className="fa fa-phone"></i>
								<p>(609) 516-8946</p>
							</div>

							<div>
								<i className="fa fa-envelope"></i>
								<p><a href="mailto:info@diamond-contractors.com">info@diamond-contractors.com</a></p>
							</div>

						</div>

						<div className="footer-right">

							<p className="footer-company-about">
								<span>About the company</span>
								Serving New Jersey & Eastern Pennsylvania since 1995, we specialize is Roofing. From repairs to replacement we have your needs convered.  Our parent company, Diamond Contractors, can take care of your paver, interior and exterior painting services, drywall installation and repairs, and more.
							</p>

							<div className="footer-icons">

								<a href="#"><i className="fa fa-facebook"></i></a>
								<a href="#"><i className="fa fa-twitter"></i></a>
								<a href="#"><i className="fa fa-linkedin"></i></a>
								<a href="#"><i className="fa fa-github"></i></a>

							</div>

						</div>

					</footer>

				</div>

			</div>
    	);
  	}
}

export default App;
