import React from "react";
import Product from "./Product";
import "./SlideProduct.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

const SlideProduct = ({ data, title }) => {
  console.log(data);

  return (
    <div className="slide_products slide">
      <div className="container">
        <div className="top_slide">
          <h2>{title}</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, quo!
          </p>
        </div>
        <Swiper
          loop={true}
          slidesPerView={4}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper">

            {data.map((item) =>{
              return(
                 <SwiperSlide><Product item={item}/></SwiperSlide>
              )
            })}

         
        </Swiper>
      </div>
    </div>
  )
}

export default SlideProduct;
