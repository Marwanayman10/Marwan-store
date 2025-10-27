import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { Autoplay , Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  return (
    <>
      <div className="hero">
        <div className="container">
          <Swiper
          loop={false}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={true}
            modules={[Pagination , Autoplay]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 350 Contoroller{" "}
                </h3>
                <p>Windows Xp/10/7/8 Ps4, Tv Box</p>
                <Link to="/" className="btn">
                  {" "}
                  Shop now
                </Link>
              </div>
              <img src="/src/img/banner_Hero1.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 350 Contoroller{" "}
                </h3>
                <p>Windows Xp/10/7/8 Ps4, Tv Box</p>
                <Link to="/" className="btn">
                  {" "}
                  Shop now
                </Link>
              </div>
              <img src="/src/img/banner_Hero2.jpg" alt="" />
            </SwiperSlide>

            <SwiperSlide>
              <div className="content">
                <h4>Introducing the new</h4>
                <h3>
                  Microsoft Xbox <br /> 350 Contoroller{" "}
                </h3>
                <p>Windows Xp/10/7/8 Ps4, Tv Box </p>
                <Link to="/" className="btn">
                  {" "}
                  Shop now
                </Link>
              </div>
              <img src="/src/img/banner_Hero3.jpg" alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default HeroSlider;
