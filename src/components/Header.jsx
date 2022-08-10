import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Logo from "../images/icons/logo.svg";
import Phoneicon from "../images/icons/phone.svg";
import Skypeicon from "../images/icons/skype.svg";
import Telegramicon from "../images/icons/telegram.svg";
import Whatsappicon from "../images/icons/whatsapp.svg";
import Dubaiflag from "../images/icons/dubai-flag.svg";
import Indiaflag from "../images/icons/india-flag.svg";
import { ReactComponent as CloseIcon } from "../images/icons/close.svg";

const Header = () => {
  const [isActive, setIsActive] = useState();
  const [sticky, setSticky] = useState(false);
  const navSticky = () => {
    if (window.scrollY >= 1) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };

  useEffect(() => {
    document.body.classList.toggle("ov-hide", isActive);
  }, [isActive]);

  window.addEventListener("scroll", navSticky);
  const handleClick = (event) => {
    setIsActive((current) => !current);
  };

  return (
    <>
      {/* header-starts */}
      <section className={sticky ? "header-wrap sticky" : "header-wrap"}>
        <header>
          <div className="header-top">
            <div className="container">
              <div className="global-presence d-flex ">
                <p className="m-0">Our global presence:</p>
                <ul className="flag-list d-flex">
                  <li>
                    <img src={Dubaiflag} alt="flag" />
                    <span>Dubai</span>
                  </li>
                  <li>
                    <img src={Indiaflag} alt="flag" />
                    <span>India</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="header-main d-flex">
              <div className="left">
                <div className="logo">
                  <Link to="/">
                    <img src={Logo} alt="logo" width={145} height={50} />
                  </Link>
                </div>
              </div>
              <div
                className={isActive ? "right active d-flex" : "right d-flex"}
              >
                <div className="close-menu d-block d-lg-none mb-4">
                  <a href="#" onClick={handleClick}>
                    <CloseIcon />
                  </a>
                </div>

                <div className="nav-links">
                  <ul className="links d-flex">
                    <li>
                      <Link to="/">Home</Link>
                    </li>
                    <li>
                      <Link to="/work">Work</Link>
                    </li>
                    <li>
                      <Link to="/">Services</Link>
                      <ul className="sub-menu">
                        <li>
                          <Link to="/">Wallet Development</Link>
                        </li>
                        <li>
                          <Link to="/">Smart Contract development</Link>
                        </li>
                        <li>
                          <Link to="/">DApps Development</Link>
                        </li>
                        <li>
                          <Link to="/">Launchpad Development</Link>
                        </li>
                        <li>
                          <Link to="/">DeFi Solutions</Link>
                        </li>
                        <li>
                          <Link to="/">Coin Development</Link>
                        </li>
                        <li>
                          <Link to="/">Exchange Development</Link>
                        </li>
                        <li>
                          <Link to="/">NFTBlockchain Development</Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link to="/contact">Contact</Link>
                    </li>
                  </ul>
                </div>
                <div className="social-links">
                  <ul className="links d-flex">
                    <li>
                      <a href="#">
                        <img src={Phoneicon} alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={Skypeicon} alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={Telegramicon} alt="icon" />
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <img src={Whatsappicon} alt="icon" />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="hamburger-menu d-block d-lg-none">
                <a
                  href="javascript:void(0);"
                  className={isActive ? "active" : ""}
                  onClick={handleClick}
                >
                  <span></span>
                  <span></span>
                </a>
              </div>
            </div>
          </div>
        </header>
      </section>
      {/* header-ends */}
    </>
  );
};

export default Header;
