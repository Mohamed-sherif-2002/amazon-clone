import React from 'react';
import './Footer.css';

const Footer = () => {

        const scrollToTop = () => {
          window.scrollTo({
            top: 0,
         
          });
        };
      
    return (
        <footer className="footer">
            <div className="top">
                <div className='backtop'>
                    <div id="backtop-container">
                        <span id="backtop" onClick={scrollToTop}>Back to top</span>
                    </div>
                </div>
                <div className="detail">
                    <div className="table">
                        <div>
                            <div className="t-head">Get To Know Us</div>
                            <ul>
                                <li><a href="#">About Amazon</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Amazon Science</a></li>
                            </ul>
                        </div>

                        <div>
                            <div className="t-head">Shop with Us</div>
                            <ul>
                                <li><a href="#">Your Account</a></li>
                                <li><a href="#">Your Orders</a></li>
                                <li><a href="#">Your Addresses</a></li>
                                <li><a href="#">Your Lists</a></li>
                            </ul>
                        </div>

                        <div>
                            <div className="t-head">Make Money with Us</div>
                            <ul>
                                <li><a href="#">Protect and build your brand</a></li>
                                <li><a href="#">Advertise Your Products</a></li>
                                <li><a href="#">Sell on Amazon</a></li>
                                <li><a href="#">Fulfillment by Amazon</a></li>
                                <li><a href="#">Supply to Amazon</a></li>
                            </ul>
                        </div>

                        <div>
                            <div className="t-head">Let Us Help You</div>
                            <ul>
                                <li><a href="#">Help</a></li>
                                <li><a href="#">Shipping & Delivery</a></li>
                                <li><a href="#">Returns & Replacements</a></li>
                                <li><a href="#">Recalls and Product Safety Alerts</a></li>
                                <li><a href="#">Amazon App Download</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="line"></div>

                    <div className="lang-and-country">
                        <img src="./amazon.png" alt="Amazon Logo" width="100px" />
                        <select id="language-select">
                            <option value="en">English</option>
                            <option value="ar">Arabic</option>
                        </select>

                        <select id="country-select">
                            <option value="eg">Egypt</option>
                            <option value="USA">United States</option>
                        </select>
                    </div>
                </div>

                <div className="bottom">
                    <div className="container">
                        <div className="column">
                            <h5><a href="#">Amazon Advertising</a></h5>
                            <p><a href="#">Find, attract, and engage customers</a></p>

                            <h5><a href="#">Audible</a></h5>
                            <p><a href="#">Download Audio Books</a></p>
                        </div>

                        <div className="column">
                            <h5><a href="#">Amazon Web Services</a></h5>
                            <p><a href="#">Scalable Cloud Computing Services</a></p>

                            <h5><a href="#">Alexa</a></h5>
                            <p><a href="#">Actionable Analytics for the Web</a></p>
                        </div>

                        <div className="column">
                            <h5><a href="#">Goodreads</a></h5>
                            <p><a href="#">Book reviews & recommendations</a></p>

                            <h5><a href="#">Shopbop</a></h5>
                            <p><a href="#">Designer Fashion Brands</a></p>
                        </div>
                    </div>

                    <div className="bottom-footer">
                        <p>Conditions of Use & Sale&nbsp;&nbsp; Privacy Notice&nbsp;&nbsp; Interest-Based Ads</p>
                        <p>&copy; 1996-2024, Amazon.com, Inc. or its affiliates</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
