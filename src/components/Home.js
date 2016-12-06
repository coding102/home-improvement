import React from 'react';
import './Home.css';

const Home = () => {
    return (
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
    );
};

export default Home;
