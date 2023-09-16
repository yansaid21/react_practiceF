import React from 'react';
import './InstagramPage.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import I1 from "../../../assets/images/jpg/ins1.jpg";
import I2 from "../../../assets/images/jpg/ins2.jpg";
import I3 from "../../../assets/images/jpg/ins3.jpg";


export const InstagramPage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
<div className="container">
      <div className="content">
        <Slider {...sliderSettings}>
          <div>
          <img src={I1} class="slidePic" />
          </div>
          <div>
          <img src={I2} class="slidePic"/>
          </div>
          <div>
          <img src={I3} class="slidePic"/>
          </div>
        </Slider>
      </div>
      </div>
  );
}
