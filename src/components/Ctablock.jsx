import React from "react";
import { Link } from "react-router-dom";

const Ctablock = () => {
  return (
    <>
      <section className="cta-section section">
        <div className="container">
          <div
            className="content-block text-white aos-animate"
            data-aos="zoom-out-down"
            data-aos-delay="300"
            data-aos-duration="800"
          >
            <h2 className="h2 title mb-3">
              Bring the power of crypto to your business in minutes
            </h2>
            <p className="desc mb-4">
              The next revolution could be an outcome of your idea. Let's
              associate.
            </p>

            <Link to="/" className="cta-btn cta-white">
              Contact Us
              <span className="icon">
                <svg
                  width="12"
                  height="11"
                  viewBox="0 0 12 11"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.15029 0.771894L1.08577 1.63154C1.07488 1.85225 1.24273 2.03752 1.44245 2.02525L8.28423 2.36272L0.363891 9.53844C0.224937 9.66433 0.211874 9.92917 0.337763 10.0681L0.925249 10.7166C1.07212 10.8787 1.31598 10.8686 1.45493 10.7427L9.37528 3.56699L9.05878 10.4319C9.02691 10.6295 9.19477 10.8147 9.41547 10.8256L10.2773 10.846C10.4748 10.8779 10.6601 10.71 10.671 10.4893L11.126 1.26396C11.1369 1.04326 10.9901 0.881143 10.7694 0.870257L1.54399 0.415206C1.32329 0.40432 1.13802 0.572173 1.15029 0.771894Z"
                    fill="currentColor"
                  />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Ctablock;
