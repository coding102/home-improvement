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
                    <a href="#"><img src="http://placekitten.com/1600/600" role="presentation"  /></a>
                    <div className="carousel-caption">
                        <h3>Meow</h3>
                        <p>Just Kitten Around</p>
                    </div>
                    </div>
                    <div className="item">
                    <a href="#"><img src="http://placekitten.com/1600/600" role="presentation"  /></a>
                    <div className="carousel-caption">
                        <h3>Meow</h3>
                        <p>Just Kitten Around</p>
                    </div>
                    </div>
                    <div className="item">
                    <a href="#"><img src="http://placekitten.com/1600/600" role="presentation"  /></a>
                    <div className="carousel-caption">
                        <h3>Meow</h3>
                        <p>Just Kitten Around</p>
                    </div>
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
                        <a href="#">
                            <i className="fa fa-home fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <h3>
                        <a href="#">Project Name</a>
                    </h3>
                    <p>Installing or replacing a roof? Protect your investment. Hire experienced craftsmen who provide quality and affordable roofing solutions.</p>
                </div>
                <div className="col-md-4 portfolio-item">
                    <div className="image">
                        <a href="#">
                            <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                        <h3>
                            <a href="#">Project Name</a>
                        </h3>
                        <p>Avoid more serious (and costly) roof damage by handling problems now. Our NJ roofing contractors can advise you on the most cost-effective roofing repair.</p>
                </div>
                <div className="col-md-4 portfolio-item">
                    <div className="image">
                        <a href="#">
                            <i className="fa fa-hand-paper-o fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <h3>
                        <a href="#">Project Name</a>
                    </h3>
                    <p>Roof leak repair? Storm damage? We’ll work outside of normal business hours to address your needs promptly and affordably.</p>
                </div>
            </div>

        </div>
    );
};

export default Home;
