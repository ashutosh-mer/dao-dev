import React, { useEffect } from "react";
import Ctablock from "../components/Ctablock";

import InnerBanner from "../components/InnerBanner";
import InfoImg from "../images/info-sec-img.png";
import VideoImg from "../images/image-sec-img.png";
import ProcessImgIcon from "../images/icons/process-iconone.png";
import { Process_Block_Data } from "../data/all-data";

const ModularPage = () => {
  useEffect(() => {
    // 👇️ scroll to top on page load
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <>
      <InnerBanner
        title="Blockchain Development"
        desc="Blockchain app development services"
      />

      <section className="infosec-wrap section gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-7">
              <div className="content-block">
                <h2 className="h2 title mb-4">
                  One-stop solution for all kinds of blockchain-based
                  infrastructure development
                </h2>
                <p className="desc">
                  Blockchain technology will build a base for a revolution as
                  big as web 3.0. Be a part of this revolution with the only
                  emerging tech company that pioneers complete blockchain based
                  solutions.
                </p>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="img-box">
                <img src={InfoImg} alt="info" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-scroll-sec section left-side-img gradient-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 img-section">
              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>

              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>

              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>

              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-block">
                <h4 className="h4 title mb-3">Custom Blockchain Development</h4>
                <p className="desc mb-3">
                  In velit urna, tincidunt ac eros ac, viverra vulputate orci.
                  Etiam sit amet diam mi. Ut vestibulum commodo tristique.
                  Nullam at nisi at diam finibus convallis. Integer consequat
                  quis leo sed eleifendIn hac habitasse platea dictumst.
                  Maecenas tempus, mauris a euismod pulvinar, ante augue sodales
                  metus.
                </p>
                <ul className="style-one">
                  <li>In velit urna, tincidunt ac eros ac</li>
                  <li>viverra vulputate orci. Etiam sit amet diam mi.</li>
                  <li>
                    Ut vestibulum commodo tristique. Nullam at nisi at diam
                    finibus convallis.
                  </li>
                  <li>Integer consequat quis leo sed eleifendIn hac.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-scroll-sec section gray-bg right-side-img gradient-img">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 img-section">
              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>

              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>

              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>

              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-block">
                <h4 className="h4 title mb-3">Custom Blockchain Development</h4>
                <p className="desc mb-3">
                  In velit urna, tincidunt ac eros ac, viverra vulputate orci.
                  Etiam sit amet diam mi. Ut vestibulum commodo tristique.
                  Nullam at nisi at diam finibus convallis. Integer consequat
                  quis leo sed eleifendIn hac habitasse platea dictumst.
                  Maecenas tempus, mauris a euismod pulvinar, ante augue sodales
                  metus.
                </p>
                <ul className="style-one">
                  <li>In velit urna, tincidunt ac eros ac</li>
                  <li>viverra vulputate orci. Etiam sit amet diam mi.</li>
                  <li>
                    Ut vestibulum commodo tristique. Nullam at nisi at diam
                    finibus convallis.
                  </li>
                  <li>Integer consequat quis leo sed eleifendIn hac.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="custom-scroll-sec section left-side-img gradient-img">
        <div className="container">
          <div className="row ">
            <div className="col-lg-6 img-section">
              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>

              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>

              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>

              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="content-block">
                <h4 className="h4 title mb-3">Custom Blockchain Development</h4>
                <p className="desc mb-3">
                  In velit urna, tincidunt ac eros ac, viverra vulputate orci.
                  Etiam sit amet diam mi. Ut vestibulum commodo tristique.
                  Nullam at nisi at diam finibus convallis. Integer consequat
                  quis leo sed eleifendIn hac habitasse platea dictumst.
                  Maecenas tempus, mauris a euismod pulvinar, ante augue sodales
                  metus.
                </p>
                <ul className="style-one">
                  <li>In velit urna, tincidunt ac eros ac</li>
                  <li>viverra vulputate orci. Etiam sit amet diam mi.</li>
                  <li>
                    Ut vestibulum commodo tristique. Nullam at nisi at diam
                    finibus convallis.
                  </li>
                  <li>Integer consequat quis leo sed eleifendIn hac.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="infosec-two-wrap section gradient-img ">
        <div className="container">
          <div className="row flex-column-reverse flex-lg-row">
            <div className="col-lg-7">
              <div className="img-box">
                <img src={InfoImg} alt="img" />
              </div>
            </div>
            <div className="col-lg-5">
              <div className="content-block mb-4 m-lg-0">
                <h4 className="h4 title mb-3">Custom Blockchain Development</h4>
                <p className="desc mb-3">
                  In velit urna, tincidunt ac eros ac, viverra vulputate orci.
                  Etiam sit amet diam mi. Ut vestibulum commodo tristique.
                  Nullam at nisi at diam finibus convallis. Integer consequat
                  quis leo sed eleifendIn hac habitasse platea dictumst.
                  Maecenas tempus, mauris a euismod pulvinar, ante augue sodales
                  metus.
                </p>
                <ul className="style-one">
                  <li>In velit urna, tincidunt ac eros ac</li>
                  <li>viverra vulputate orci. Etiam sit amet diam mi.</li>
                  <li>
                    Ut vestibulum commodo tristique. Nullam at nisi at diam
                    finibus convallis.
                  </li>
                  <li>Integer consequat quis leo sed eleifendIn hac.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="full-width-sec-wrap section gray-bg gradient-img">
        <div className="container">
          <div className="content-block text-center">
            <h2 className="h2 title mb-3">Consensus Forking</h2>
            <p className="desc mb-4">
              In velit urna, tincidunt ac eros ac, viverra vulputate orci. Etiam
              sit amet diam mi. Ut vestibulum commodo tristique. Nullam at nisi
              at diam finibus convallis. Integer consequat quis leo sed
              eleifendIn hac habitasse platea dictumst. Maecenas tempus, mauris
              a euismod pulvinar, ante augue sodales metus.
            </p>

            <div className="img-box">
              <img src={InfoImg} alt="sec-img" />
            </div>
          </div>
        </div>
      </section>

      <section className="video-sec-wrap section">
        <div className="container">
          <div className="content-block">
            <h2 className="h2 title mb-3">
              Praesent molestie magna tincidunt ipsum iaculis imperdiet. Morbi
              enim
            </h2>

            <div className="video-image">
              <a href="#">
                <img src={VideoImg} alt="sec-img" />
                <div className="content">
                  <h5 className="h5 title mb-3">Blockchain Development</h5>
                  <p className="desc">
                    Let’s remodel the traditional business rule to a distinct
                    level.
                  </p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="process-wrap section">
        <div className="container">
          <h2 className="h2 title mb-5 text-center">
            Our Process of Blockchain Development
          </h2>

          <div className="process-wrap">
            <ul className="process-box">
              {Process_Block_Data.map((item, index) => {
                return (
                  <>
                    <li className="d-flex">
                      <div className="title">
                        <span>{item.id}</span>
                        {item.title}
                      </div>
                      <div className="icon">
                        <div className="inner">
                          <img src={item.image} alt="icon" />
                        </div>
                      </div>
                      <div className="desc">{item.desc}</div>
                    </li>
                  </>
                );
              })}
            </ul>
          </div>
        </div>
      </section>

      <section className="quote-sec section">
        <div className="container">
          <div className="content">
            <h2 className="h2 title mb-4">
              “We harness the potential of varied Blockchain platforms to
              deliver innovative enterprise grade blockchain solutions that make
              a difference.”
            </h2>

            <div className="author mb-4">
              - <strong>Adam Smith</strong> (CEO, Instagram)
            </div>

            <h3 className="subtitle mb-4">
              Blockchain technology will build a base for a revolution as big as
              web 3.0. Be a part of this revolution with the only emerging tech
              company that pioneers complete blockchain based solutions.
            </h3>

            <div className="desc">
              <p>
                Blockchain technology will build a base for a revolution as big
                as web 3.0. Be a part of this revolution with the only emerging
                tech company that pioneers complete blockchain based solutions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Ctablock />
    </>
  );
};

export default ModularPage;
