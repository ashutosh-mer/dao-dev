import React from "react";
import BannerImg from "../images/banner-object.svg";
import { Pagination, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Banner = () => {
  return (
    <>
      <section className="banner-wrap section">
        <div className="container">
          <Swiper
            modules={[Pagination, A11y, Autoplay]}
            slidesPerView={1}
            speed={2000}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide>
              <div className="content-block">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h1 className="h1 title">
                      One-stop solution for all kinds of
                      <br />
                      <span className="txt-em">blockchain</span>
                      -based infrastructure development
                    </h1>
                  </div>
                  <div className="col-lg-6">
                    <div className="img-box">
                      <img src={BannerImg} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="content-block">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h1 className="h1 title">
                      One-stop solution for all kinds of
                      <br />
                      <span className="txt-em">blockchain</span>
                      -based infrastructure development
                    </h1>
                  </div>
                  <div className="col-lg-6">
                    <div className="img-box">
                      <img src={BannerImg} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="content-block">
                <div className="row align-items-center">
                  <div className="col-lg-6">
                    <h1 className="h1 title">
                      One-stop solution for all kinds of
                      <br />
                      <span className="txt-em">blockchain</span>
                      -based infrastructure development
                    </h1>
                  </div>
                  <div className="col-lg-6">
                    <div className="img-box">
                      <img src={BannerImg} alt="img" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Banner;
