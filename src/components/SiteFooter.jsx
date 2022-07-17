import React from "react";
import { Link } from "react-router-dom";
import Logo from "../images/logo-white.svg";
import Arrowsvg from "../images/icons/up-arrow.svg";
import FacebookI from "../images/icons/f-facebook.svg";
import TwitterI from "../images/icons/f-twitter.svg";
import TelegramI from "../images/icons/f-telegram.svg";
import LinkedinI from "../images/icons/f-linkedin.svg";

const SiteFooter = () => {
  return (
    <>
      <footer className="footer-wrap">
        <div className="container">
          <div className="content-block text-white">
            <div className="row">
              <div className="col-lg-5">
                <div className="footer-logo mb-4">
                  <Link to="/">
                    <img src={Logo} alt="Logo" />
                  </Link>
                </div>
                <ul className="footer-links d-flex flex-wrap">
                  <li>
                    <Link to="/" className="cta-link">
                      Home
                      <span className="icon">
                        <img src={Arrowsvg} alt="icon" />
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/work" className="cta-link">
                      Work
                      <span className="icon">
                        <img src={Arrowsvg} alt="icon" />
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/services" className="cta-link">
                      Services
                      <span className="icon">
                        <img src={Arrowsvg} alt="icon" />
                      </span>
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact" className="cta-link">
                      Contact Us
                      <span className="icon">
                        <img src={Arrowsvg} alt="icon" />
                      </span>
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-3">
                <div className="contact-us">
                  <h6 className="h6 title mb-3 ">Contact Us</h6>

                  <ul className="contact-links">
                    <li>
                      <span className="title">India</span>
                      <div className="link">
                        <a href="tel:+916358006358">+91 6358006358</a>
                      </div>
                    </li>

                    <li>
                      <span className="title">Dubai</span>
                      <div className="link">
                        <a href="tel:+971589170092">+971 589170092</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4">
                <div className="get-in-touch-wrap">
                  <h6 className="h6 title mb-3">Get in touch</h6>
                  <ul className="social-links d-flex flex-wrap">
                    <li>
                      <a href="#" className="cta-btn cta-gradient">
                        <img src={FacebookI} alt="icon" />
                      </a>
                    </li>

                    <li>
                      <a href="#" className="cta-btn cta-gradient">
                        <img src={TwitterI} alt="icon" />
                      </a>
                    </li>

                    <li>
                      <a href="#" className="cta-btn cta-gradient">
                        <img src={TelegramI} alt="icon" />
                      </a>
                    </li>

                    <li>
                      <a href="#" className="cta-btn cta-gradient">
                        <img src={LinkedinI} alt="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="copyright-sec text-white d-flex flex-wrap">
            <div className="left">
              <p className="m-md-0 mb-3">DAO Platforms Copyright © 2017-2022</p>
            </div>
            <div className="right">
              <ul className="cp-links d-flex flex-wrap">
                <li>
                  <Link to="/">Terms And Conditions</Link>
                </li>
                <li>
                  <Link to="/">Privacy Policy</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SiteFooter;
