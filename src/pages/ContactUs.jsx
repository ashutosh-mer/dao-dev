import React, { useEffect } from "react";
import InnerBanner from "../components/InnerBanner";
import { ReactComponent as LocationIcon } from "../images/icons/location.svg";
import { ReactComponent as PhoneIcon } from "../images/icons/phone.svg";

const ContactUs = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <InnerBanner title="Contact Us" desc="Get in touch with us" />

      <div className="contactus-wrap section">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="content-block">
                <h2 className="h2 title mb-3">Contact Us</h2>
                <p className="info mb-2">
                  Need to know how your business can benefit from blockchain?
                </p>

                <p className="info mb-2">
                  Fill up the form or, if you want,
                  <span>
                    <a href="#">mail us</a>
                  </span>
                </p>
              </div>
              <form className="form-wrap mb-lg-0 mb-5">
                <div className="row">
                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-label">I am contacting for</label>
                      <select
                        name="business"
                        id="business"
                        className="form-select"
                      >
                        <option value="New Business">New Business</option>
                        <option value="Old Business">Old Business</option>
                        <option value="Test">Test</option>
                      </select>
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-label">Name</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-label">Email</label>
                      <input type="email" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-group">
                      <label className="form-label">Phone/Telegram</label>
                      <input type="text" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12 mb-5">
                    <div className="form-group">
                      <label className="form-label">Project Discussion</label>
                      <textarea cols="5" rows="5" className="form-control" />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="btn-wrap text-center text-lg-end">
                      <button type="submit" className="cta-btn cta-gradient">
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>

            <div className="col-lg-4">
              <div className="get-in-touch-wrap">
                <div className="content">
                  <h4 className="h4 title mb-3">Get in touch</h4>
                  <p className="desc">
                    You can contact us anytime on the following details.
                  </p>
                </div>

                <ul className="locations">
                  <li>
                    <div className="icon">
                      <LocationIcon />
                    </div>
                    <div className="map-link">
                      <a href="#">Ahmedabad, India</a>
                    </div>
                    <div className="phone-link">
                      <PhoneIcon />
                      <a href="tel:916358006358">+91 6358006358</a>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <LocationIcon />
                    </div>
                    <div className="map-link">
                      <a href="#">Dubai</a>
                    </div>
                    <div className="phone-link">
                      <PhoneIcon />
                      <a href="tel:971589170092">+971 589170092</a>
                    </div>
                  </li>

                  <li>
                    <div className="icon">
                      <LocationIcon />
                    </div>
                    <div className="map-link">
                      <a href="#">Whatsapp</a>
                    </div>
                    <div className="phone-link">
                      <PhoneIcon />
                      <a href="tel:+971589170092">+971 589170092</a>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
