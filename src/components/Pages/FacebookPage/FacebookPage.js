import React from 'react';
import './FacebookPage.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import F1 from "../../../assets/images/jpg/face1.jpg";
import F2 from "../../../assets/images/jpg/face2.png";
import F3 from "../../../assets/images/jpg/face3.jpg";


export const FacebookPage = () => {
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
          <img src={F1} class="slidePic" />
          </div>
          <div>
          <img src={F2} class="slidePic"/>
          </div>
          <div>
          <img src={F3} class="slidePic"/>
          </div>
        </Slider>
      </div>
      </div>
  );
}
