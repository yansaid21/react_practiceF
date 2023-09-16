import React from 'react';
import './LinkedinPage.scss';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import L1 from "../../../assets/images/jpg/link1.png";
import L2 from "../../../assets/images/jpg/link2.jpg";
import L3 from "../../../assets/images/jpg/link3.jpg";


export const LinkedinPage = () => {
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
          <img src={L1} class="slidePic" />
          </div>
          <div>
          <img src={L2} class="slidePic"/>
          </div>
          <div>
          <img src={L3} class="slidePic"/>
          </div>
        </Slider>
      </div>
      </div>
  );
}
