import React from 'react';
import styled from 'styled-components';
import {Container} from "@material-ui/core";
import brand1 from '../../../img/partners/brand1.png'
import brand2 from '../../../img/partners/brand2.png'
import brand3 from '../../../img/partners/brand3.png'
import brand4 from '../../../img/partners/brand4.png'
import brand5 from '../../../img/partners/brand5.png'
import Slider from "react-slick";

type Props = {};
const Partners = (props: Props) => {
   const settings = {
       speed: 500,
       slidesToShow: 5,
       slidesToScroll: 1,
       autoplay: true,
       autoplaySpeed: 3000,
       infinite: true,
       responsive: [
        {
          breakpoint: 800,
            settings: {
                slidesToShow: 4,
            }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2
          }
        }
      ]
    };
    return (
        <StyledContainer>
            <Container maxWidth='lg'>
                <Slider {...settings}>
                    <div className="item">
                        <img src={brand1} alt="brand name"/>
                    </div>
                    <div className="item">
                        <img src={brand2} alt="brand name"/>
                    </div>
                    <div className="item">
                        <img src={brand3} alt="brand name"/>
                    </div>
                    <div className="item">
                        <img src={brand4} alt="brand name"/>
                    </div>
                    <div className="item">
                        <img src={brand5} alt="brand name"/>
                    </div>
                </Slider>
            </Container>
        </StyledContainer>
    );
};
export default React.memo(Partners);

const StyledContainer = styled.div`
  padding: 50px 0;
  .item{
    img{
      max-width: 100%;
      margin-left: auto;
      margin-right: auto;
    }
    &:focus{
      outline: none;
    }
    &:hover{
      cursor: pointer;
      color: #000;
      opacity: 0.3;
      filter: brightness(0.3);
      transition: all .3s ease;
    }
  }
`