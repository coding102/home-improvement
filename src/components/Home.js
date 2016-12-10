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
                    <a href="#"><img src="https://lh3.googleusercontent.com/QyI-YrobpE2vTvtZEXJMpl3JmEoXusqN8sUA2OdFyNR6eS57J6t1bNFs-zigynTDmgLj_d1xmghr_fAazp2l8JMDGWMqpG9xqQwjYxrvWZe5nKRnPoytO4ovHTwp2GpuXXJX6aRNY98dU59QMnh_fV4sTy7dlQeol7ryncYVOAoHCZ36fFoGp5ZRfaN2CVFYLeVC-b-YMpxTk0n4k3ZuYwsa7LYLHf_4sJeQBZz4Q_aUxZAVuGZErhlD_8gO7F0RD6ezsiwrx4RKv6_cBVd9JH9-TyfGC3P9Mdn_DSZabr0ZNJ43_qoLWYPWpcvbiQg2MW4I7oMy6tqAQm15Xp2p5YyM9nBaamXBKXbLY7IorPMveTKn3YghljrUc7L-k_TJ8QEa6BlvPUVjJwibYgv6shKYnzzxhQdDGCh88k0YHrv1jIkL79S7Aru1ZZT3o_3mcYeoelbJg3zT1I2w6_KCKlRrASDLBNc9DP49Oy2P6nf11nO1z4JDtcXHDtY4163kAEmL3xY0d1t9bGgmgl_TzDPjqqADkd6JfsRNlkxlbDjXcRus-MMPQC1snx1xdS8GgDMFWLLnuKPsSWkEe-iKFqgxv7XNK4zNcx7yqOqHMhBJpoqYTAJ6=w2662-h1000-no" role="presentation"  /></a>
                    </div>
                    <div className="item">
                    <a href="#"><img src="https://lh3.googleusercontent.com/D9zaY9PyPD50uRimDA1ivOFTbdxvhgYPcNMggtrEDILBVdioB4afUdSBAZdJYY4muBAL6O4y1QZY5I0wBJ-crr0X08a0oDOoYtgXFg--OQHeiExsCR-0MIn61SKc3QuPiMJqzfdXkmICIJT1cbrz1DOWashIYBE63VkzLFnMJqz-HVvlt91PJyEM-pz98V05u5mKTilCRaZqBY5lDIsCm1u5VVll6ejN87JfVLT3FMZGx6RMBc4aFrqWxyYpZV6nlEpa8yKB60OerGSNE6XIdFiziEXdsjjlfVLMmrHUdW-da3vGejZWxn1JKz2Nyy9dTf5GKrA4Og4sGJPtUYuUcSIhCD0_QBFi4_lAleHsvs9J8Jg8ixTlm6d1kB9MidraL-PPvN1QasCwLYnsdXgMY_wyHYdxMnJZpbhGEHgU143cwj7xS7wTzK3N_Z4_Pi7npOy6epuFujQAuy7B-WSC1ZfBrVXiBIZha0d0SzwxFxWcAZdVHrF2l-2yyTFoKZQMhpqsLqEOKDBpGSoAFLPdI4bMZ7Mop5MY9OgJ06d1FchR7SS23VyV--fxzE95P81_Q70pKxIQyxl1MimqeuAMwor9TRy94yMAplr4-VMoskU6m350giQf=w1600-h600-no" role="presentation" /></a>
                    </div>
                    <div className="item">
                    <a href="#"><img src="https://lh3.googleusercontent.com/L0qEhmgJN2Zv5SunflCOG9j2G4UJLYGZqsNqaDXxxnQ3-ChY3azBkP2ycBBtmEtpCoDcUJDS09rbSkHidr-MElggkGYC5LY-OXeJKK6M6_ZQOVyjvQadx5cAwrZzraRi67R42NLjldSQnA0DoCHhlAULhsrG3CCwLuGroBS6RvXjBOZyy9KF_CVWYRvCzIU5qYKxiKgOxdkPukELyDmwEjsIRLEk4e6QqNj2Nn3qeeDGSrLLS9tFJIYc4vQYVnzZxPHTsmeC5ArU4PRDfqh0Is6QPCNdmnQwXp83iLlACEf6efaQZUK-pOjge9aJDrMWHgHspDX9t8ruHLHA9CQcZu9F4FaGC1NKVtRPuA9CFoOY5kTUlkKnl-_kRZGLgNLcMMPCbSf5RXRgPmd-SBhZwNR6-KAzpGUaIoLDnwJrV3nNoVsBj4FtZz-aE_6RNLiHNSmSDwMkpt_hKHFw16t1ErpAq_akFp2C8I1POqg-bekTJN_z9kePSgZTj2ohXUTZ3ouszNkw7Y689oYKKjyJhPvU8UGYUUfKwPzB290bfFlgu4HFvD02ISTI_g8yFN-NHiHnUubnbDqzD5yzZQFNCtC2O1n7VOd3vcdWKYfZCz8JlT5bpYnQ=w1600-h600-no" role="presentation"  /></a>
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
                        <a href="#">New Roof</a>
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
                            <a href="#">Repairs</a>
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
                        <a href="#">Emergency Services</a>
                    </h3>
                    <p>Roof leak repair? Storm damage? We’ll work outside of normal business hours to address your needs promptly and affordably.</p>
                </div>
            </div>

            <hr />

            <div className="row">
                <div className="col-md-6 portfolio-item">
                    <div className="image">
                        <a href="#">
                            <i className="fa fa-home fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                    <h3>
                        <a href="#">New Roof</a>
                    </h3>
                    <p>Installing or replacing a roof? Protect your investment. Hire experienced craftsmen who provide quality and affordable roofing solutions.</p>
                </div>
                <div className="col-md-6 portfolio-item">
                    <div className="image">
                        <a href="#">
                            <i className="fa fa-wrench fa-5x" aria-hidden="true"></i>
                        </a>
                    </div>
                        <h3>
                            <a href="#">Repairs</a>
                        </h3>
                        <p>Avoid more serious (and costly) roof damage by handling problems now. Our NJ roofing contractors can advise you on the most cost-effective roofing repair.</p>
                </div>
            </div>

        </div>
    );
};

export default Home;
