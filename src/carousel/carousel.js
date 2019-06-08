import React from 'react';
import {Carousel   } from 'react-bootstrap'
import './carousel.css'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class ControlledCarousel extends React.Component {
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }
  
    render() {
      const { index, direction } = this.state;
  
      return (
        <Link to="/">
        <Carousel
          activeIndex={index}
          direction={direction}
          onSelect={this.handleSelect}
        >
          <Carousel.Item>
            <img id="size"
              className="d-block w-100"
              src="http://www.khazanajewellery.com/wp-content/uploads/2018/12/LowWastage_HomePage_Nov18_Eng_6601_DT2.jpg"
               alt="First slide"
            />
            
          </Carousel.Item>
          <Carousel.Item>
            <img id="size"
              className="d-block w-100"
              src="http://www.josalukkasonline.com/media_library/original_jos-alukkas-home-collection-section-left-1-nzjccd.jpg"
                alt="second slide"
            />
  
            
          </Carousel.Item>
          <Carousel.Item>
            <img id="size"
              className="d-block w-100"
              src="http://www.keyurjewellers.in/slide/464338000000019081/banner27.jpg"
              alt="Third slide"
            />
  
            
          </Carousel.Item>
        </Carousel>
        </Link>
      );
    }
  }
  
  export default ControlledCarousel;