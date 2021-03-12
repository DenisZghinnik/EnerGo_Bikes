import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from '../../../img/header-slider/img1.jpg'
import img2 from '../../../img/header-slider/img2.jpg'
import img3 from '../../../img/header-slider/img3.jpg'
import {grey} from "../../../css vars/colors";
import styled from 'styled-components';
import SliderItemContent from "./SliderItemContent";

const firstSlideContent = {
    text1: 'save 20%',
    text2: 'must Haves',
    text3: 'find My',
    text4: 'e-bike'
}
const secondSlideContent = {
    text1: 'take the streets',
    text2: 'ride bikes',
    text3: 'light',
    text4: 'e-bike'
}
const thirdSlideContent = {
    text1: '20% off',
    text2: 'have fun',
    text3: 'e-bike',
    text4: 'brand'
}

type Props = {};
const HeaderSlider = (props: Props) => {
    const [index, setIndex] = React.useState<number|null>(null);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows:false
    };

    return (
        <StyledSlider onInit={()=>setIndex(0)}
                      afterChange={(i)=>setIndex(i)}
                      {...settings}>
            <div className='slider-item'>
                <img src={img1} alt="bike"/>
                <SliderItemContent animate={index===0} content={firstSlideContent}/>
            </div>
          <div className='slider-item'>
              <img src={img2} alt="bike"/>
               <SliderItemContent animate={index===1} content={secondSlideContent}/>
          </div>
          <div className='slider-item'>
              <img src={img3} alt="bike"/>
               <SliderItemContent animate={index===2} content={thirdSlideContent}/>
          </div>
        </StyledSlider>
    );
};
export default React.memo(HeaderSlider);

const StyledSlider = styled(Slider)`&& {
  div:focus, button:focus{
    outline: none;
  }
  img {
    width: 100%;
    height: auto;
  }
  .slick-dots{
    left: 50%;
    bottom: 30px;
    width: unset;
    background: #fff;
    border-radius: 10px;
    display: flex !important;
    transform: translateX(-50%);
    align-items: center;
    padding: 5px;
    .slick-active button{
      background-color: #333333;
      border-radius: 50%;
      border-color: #333333;
    }
    li{
      margin: 0 3px;
      height: 11px;
      display: flex;
      justify-content: center;
    }
    button{
      border: 1px solid ${grey};
      border-radius: 50%;
      width: 12px;
      height: 12px;
      &:before{
        display: none;
      }
    }
  }
  
}`