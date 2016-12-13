import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className="container">
            <div id="carousel-example" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carousel-example" data-slide-to="0" className="active"></li>
                    <li data-target="#carousel-example" data-slide-to="1"></li>
                    <li data-target="#carousel-example" data-slide-to="2"></li>
                </ol>

                <div className="carousel-inner">
                    <div className="item active">
                    <a><img src="https://s17.postimg.org/4yx7dxk5b/bin8hk6_000_kira_ikonnikova.jpg" alt="home" width="750" /></a>
                    </div>
                    <div className="item">
                    <a><img src="https://s17.postimg.org/871oqz6f3/bjej8by1jyq_rowan_heuvel.jpg" alt="home" width="750" /></a>
                    </div>
                    <div className="item">
                    <a><img src="https://s17.postimg.org/yte5fyam7/cuzezaryfje_thirsty_turf_irrigation.jpg" alt="home" width="720" /></a>
                    </div>
                </div>

                <a className="left carousel-control" href="#carousel-example" data-slide="prev">
                    <span className="glyphicon glyphicon-chevron-left"></span>
                </a>
                <a className="right carousel-control" href="#carousel-example" data-slide="next">
                    <span className="glyphicon glyphicon-chevron-right"></span>
                </a>
            </div>

            <br />

            <div className="row">
                <div className="col-md-4 portfolio-item">
                    <div className="image">
                        <a>
                            <i className="fa fa-home fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <h3>
                        <a>New Roof</a>
                    </h3>
                    <p>Installing or replacing a roof? Protect your investment. Hire experienced craftsmen who provide quality and affordable roofing solutions.</p>
                </div>
                <div className="col-md-4 portfolio-item">
                    <div className="image">
                        <a>
                            <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                        <h3>
                            <a>Repairs</a>
                        </h3>
                        <p>Avoid more serious (and costly) roof damage by handling problems now. Our NJ roofing contractors can advise you on the most cost-effective roofing repair.</p>
                </div>
                <div className="col-md-4 portfolio-item">
                    <div className="image">
                        <a>
                            <i className="fa fa-hand-paper-o fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <h3>
                        <a>Emergency Services</a>
                    </h3>
                    <p>Roof leak repair? Storm damage? We’ll work outside of normal business hours to address your needs promptly and affordably.</p>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="col-md-6 portfolio-item">
                    <div className="image">
                        <a>
                            <i className="fa fa-certificate fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <h3>
                        <a>The My Roofing Contractor Guarantee</a>
                    </h3>
                    <p>
                        How sure are we that you’ll love the work we do? So sure that My Roofing Contractor guarantees the quality of our roofing work. You can rest easy knowing that all of our experienced New Jersey roofers are qualified professionals who know the job like the back of their hand. We have first hand knowledge of working with all kinds of roofs in NJ, and a track record that speaks for itself.
                    </p>
                </div>

                <div className="col-md-6 portfolio-item">
                    <div className="image">
                        <a>
                            <i className="fa fa-question fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <br />
                    <div className="list-group">
                        <a className="list-group-item active">
                            <h4 className="list-group-item-heading">Why Choose Us?</h4>
                        </a>
                        <a className="list-group-item">
                            <p className="list-group-item-text">20 Years of Experience</p>
                        </a>
                        <a className="list-group-item">
                            <p className="list-group-item-text">Proven Track Record</p>
                        </a>
                        <a className="list-group-item">
                            <p className="list-group-item-text">Excellent Customer Service</p>
                        </a>
                        <a className="list-group-item">
                            <p className="list-group-item-text">Quality Craftsmanship</p>
                        </a>
                        <a className="list-group-item">
                            <p className="list-group-item-text">Superb Value – Cleanup Services Included</p>
                        </a>
                        <a className="list-group-item">
                            <p className="list-group-item-text">Satisfaction Guaranteed!</p>
                        </a>
                     
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;
