import React from 'react'
import Slider from 'react-slick'
import ReactDOM from "react-dom";

class CatSlider extends React.Component{
    
    render() {
        var settings = {
          dots: true
        };
        return (
            <div className="container">
              <Slider {...settings}>
                <div>
                  <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                  <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                  <img src="http://placekitten.com/g/400/200" />
                </div>
                <div>
                  <img src="http://placekitten.com/g/400/200" />
                </div>
              </Slider>
            </div>
          );
        }
}

ReactDOM.render(<ReactSlickDemo />, document.getElementById("containerSlider"));