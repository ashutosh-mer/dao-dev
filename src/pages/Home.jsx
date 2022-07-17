import React from "react";

import { Link } from "react-router-dom";
import Banner from "../components/Banner";
import { Service_Block_Data } from "../data/all-data";
import Arrowsvg from "../images/icons/up-arrow.svg";
import Secimg from "../images/home-two-img.png";
import ExpertIcon1 from "../images/expert-icon1.svg";
import ExpertIcon2 from "../images/expert-icon2.svg";
import ExpertIcon3 from "../images/expert-icon3.svg";
import ExpertIcon4 from "../images/expert-icon4.svg";
import ExpertIcon5 from "../images/expert-icon5.svg";
import ExpertIcon6 from "../images/expert-icon6.svg";
import ExpertIcon7 from "../images/expert-icon7.svg";
import ExpertIcon8 from "../images/expert-icon8.svg";
import Ctablock from "../components/Ctablock";
import WorkImg from "../images/work-img1.png";
import WorkImg2 from "../images/work-img2.png";
import WorkImg3 from "../images/work-img3.png";
import WorkImg4 from "../images/work-img4.png";
import WorkImg5 from "../images/work-img5.png";
import { Pagination, A11y, Autoplay, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import PrevArrow from "../images/icons/slider-prev-arrow.svg";
import NextArrow from "../images/icons/slider-next-arrow.svg";

const Home = () => {
  return (
    <>
      <div className="page-wrapper">
        <Banner />

        <section className="two-column-sec-wrap section right-side-img">
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <div className="content-block mb-5 m-lg-0">
                  <h2
                    className="h2 title mb-3 aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="300"
                  >
                    Develop your blockchain product with higher experienced
                    professional
                  </h2>
                  <p
                    className="desc mb-3 aos-animate"
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="600"
                  >
                    Blockchain technology will build a base for a revolution as
                    big as web 3.0. Be a part of this revolution with the only
                    emerging tech company that pioneers complete blockchain
                    based solutions.
                  </p>
                  <Link
                    to="/"
                    className="cta-btn cta-gradient aos-animate "
                    data-aos="fade-up"
                    data-aos-duration="800"
                    data-aos-delay="900"
                  >
                    Explore More
                    <span className="icon">
                      <img src={Arrowsvg} alt="icon" />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="img-box aos-animate "
                  data-aos-delay="1200"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <img src={Secimg} alt="section-img" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="services-section gray-bg section">
          <div className="container">
            <div className="content-block">
              <div className="row justify-content-between">
                <div className="col-lg-6 m-lg-0 mb-4">
                  <h2
                    className="h2 title mb-4 aos-animate"
                    data-aos-delay="300"
                    data-aos-duration="800"
                    data-aos="fade-up"
                  >
                    Services
                  </h2>
                  <p
                    className="aos-animate"
                    data-aos-delay="600"
                    data-aos-duration="800"
                    data-aos="fade-up"
                  >
                    Blockchain will change the way you trust and we will change
                    the way you blockchain. Trust blockchain, trust Codezeros.
                  </p>
                </div>
                <div className="col-lg-6 text-lg-end text-start">
                  <a
                    href="#"
                    className="cta-btn cta-gradient aos-animate"
                    data-aos-delay="900"
                    data-aos-duration="800"
                    data-aos="fade-up"
                  >
                    View All
                    <span className="icon">
                      <img src={Arrowsvg} alt="icon" />
                    </span>
                  </a>
                </div>
              </div>
            </div>

            <div className="services-block-main">
              {Service_Block_Data.map((item, index) => {
                return (
                  <>
                    <div
                      className="services-block aos-animate"
                      data-aos={index % 2 === 0 ? "fade-right" : "fade-left"}
                      data-aos-duration="1000"
                      data-aos-delay="300"
                    >
                      <div className="row align-items-center">
                        <div className="col-lg-6">
                          <div className="img-box">
                            <img src={item.image} alt="service-img" />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="content">
                            <h5 className="h5 title">{item.title}</h5>
                            <p className="mb-3">{item.desc}</p>
                            <div className="btn-wrap">
                              <a href="#" className="cta-btn cta-gradient">
                                {item.btn_txt}
                                <span className="icon">
                                  <img src={Arrowsvg} alt="icon" />
                                </span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </section>

        <section className="expertise-sec section">
          <div className="container">
            <div className="content-block text-center mb-5">
              <h2
                className="h2 title mb-4 aos-animate"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos="fade-up"
              >
                Our Blockchain Tech Expertise
              </h2>
              <p
                className="desc aos-animate"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos="fade-up"
              >
                We harness the potential of varied Blockchain platforms to
                deliver innovative enterprise grade blockchain solutions that
                make a difference.
              </p>
            </div>

            <div
              className="expertise-box aos-animate"
              data-aos-delay="300"
              data-aos-duration="800"
              data-aos="zoom-out-up"
            >
              <ul className="d-flex flex-wrap">
                <li>
                  <img src={ExpertIcon1} alt="icon" />
                </li>
                <li>
                  <img src={ExpertIcon2} alt="icon" />
                </li>
                <li>
                  <img src={ExpertIcon3} alt="icon" />
                </li>
                <li>
                  <img src={ExpertIcon4} alt="icon" />
                </li>
                <li>
                  <img src={ExpertIcon5} alt="icon" />
                </li>
                <li>
                  <img src={ExpertIcon6} alt="icon" />
                </li>
                <li>
                  <img src={ExpertIcon7} alt="icon" />
                </li>
                <li>
                  <img src={ExpertIcon8} alt="icon" />
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="work-slider-wrap section gray-bg">
          <div className="container">
            <div className="content-block">
              <div className="row">
                <div className="col-lg-6">
                  <h2
                    className="h2 title mb-3 aos-animate"
                    data-aos-delay="300"
                    data-aos-duration="800"
                    data-aos="fade-up"
                  >
                    Work
                  </h2>
                  <p
                    className="desc mb-4 aos-animate"
                    data-aos-delay="600"
                    data-aos-duration="800"
                    data-aos="fade-up"
                  >
                    Blockchain will change the way you trust and we will change
                    the way you blockchain. Trust blockchain, trust Codezeros.
                  </p>
                </div>
                <div className="col-lg-6">
                  <div className="btn-wrap text-lg-end">
                    <Link
                      to="/"
                      className="cta-btn cta-gradient aos-animate"
                      data-aos-delay="900"
                      data-aos-duration="800"
                      data-aos="fade-up"
                    >
                      Learn More
                      <span className="icon">
                        <img src={Arrowsvg} alt="icon" />
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="container-fluid">
            <div className="work-slider mt-5">
              <Swiper
                modules={[Pagination, A11y, Autoplay, Navigation]}
                slidesPerView={1}
                spaceBetween={30}
                speed={2000}
                navigation={{
                  nextEl: ".online-arrow-left",
                  prevEl: ".online-arrow-right",
                }}
                pagination={{ clickable: true }}
                autoplay={{
                  delay: 5000,
                  disableOnInteraction: false,
                }}
                breakpoints={{
                  768: {
                    slidesPerView: 2,
                  },
                  992: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                  },
                  1280: {
                    slidesPerView: 4,
                    spaceBetween: 20,
                  },
                  1300: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                  },
                }}
              >
                <SwiperSlide>
                  <div
                    className="img-box"
                    style={{
                      backgroundImage: `url(${WorkImg})`,
                    }}
                  >
                    <img src={WorkImg} alt="work-img" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="img-box"
                    style={{
                      backgroundImage: `url(${WorkImg2})`,
                    }}
                  >
                    <img src={WorkImg2} alt="work-img" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="img-box"
                    style={{
                      backgroundImage: `url(${WorkImg3})`,
                    }}
                  >
                    <img src={WorkImg3} alt="work-img" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="img-box"
                    style={{
                      backgroundImage: `url(${WorkImg4})`,
                    }}
                  >
                    <img src={WorkImg4} alt="work-img" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="img-box"
                    style={{
                      backgroundImage: `url(${WorkImg5})`,
                    }}
                  >
                    <img src={WorkImg5} alt="work-img" />
                  </div>
                </SwiperSlide>

                <SwiperSlide>
                  <div
                    className="img-box"
                    style={{
                      backgroundImage: `url(${WorkImg})`,
                    }}
                  >
                    <img src={WorkImg} alt="work-img" />
                  </div>
                </SwiperSlide>
              </Swiper>
              <div className="navigation-btn ">
                <button className="swiper-arrow-right online-arrow-right swiper-button-prev">
                  <img src={PrevArrow} alt="icon" />
                </button>
                <button className="swiper-arrow-left online-arrow-left swiper-button-next">
                  <img src={NextArrow} alt="icon" />
                </button>
              </div>
            </div>
          </div>
        </section>

        <Ctablock />
      </div>
    </>
  );
};

export default Home;
