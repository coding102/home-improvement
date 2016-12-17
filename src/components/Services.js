import React from 'react';
import './Services.css';

const Services = () =>  {
    return (
      <div className="container-fluid text-center">
        <br />
        <h2>SERVICES</h2>
        <h4>What we offer</h4>
        <div className="row">
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-lock"></span>
            <h4>JOB DONE</h4>
            <p>We get the job done</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-certificate"></span>
            <h4>CERTIFIED</h4>
            <p>Licensed & Insured NJ/PA</p>
          </div>
          <div className="col-sm-4">
            <span className="glyphicon glyphicon-wrench"></span>
            <h4>HARD WORK</h4>
            <p>We get the job done</p>
          </div>
        </div>
        <br />
        <h2>What our customers say</h2>
        <div id="myCarousel" className="carousel slide text-center" data-ride="carousel">
          <ol className="carousel-indicators">
            <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
            <li data-target="#myCarousel" data-slide-to="1"></li>
            <li data-target="#myCarousel" data-slide-to="2"></li>
          </ol>

          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <h4>"This company is the best. I am so happy with the result!"<br /><span>Michael Roe, Vice President, Comment Box</span></h4>
            </div>
            <div className="item">
              <h4>"One word... WOW!!"<br /><span>John Doe, Salesman, Rep Inc</span></h4>
            </div>
            <div className="item">
              <h4>"One word... WOW!!"<br /><span>John Doe, Salesman, Rep Inc</span></h4>
            </div>
          </div>

          <a className="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
            <span className="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="right carousel-control" href="#myCarousel" role="button" data-slide="next">
            <span className="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    );
  };

export default Services;