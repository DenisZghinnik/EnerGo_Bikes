import React from 'react';
import Slider from 'react-slick';
import styled from 'styled-components';
import ProductItem from "../../../defaultComponents/ProductItem";
import {useSelector} from "react-redux";
import {getProductsList} from "../../../../selectors/selectors";

type Props = {};
const NewArrivalsCarrousel = (props: Props) => {
    const productsList = useSelector(getProductsList).filter((a:any)=>a.new);

    const settings = {
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 2500,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    };

    return (
        <StyledCarousel {...settings}>
            {productsList.map((item:any,i:number)=>(
                <div className='item' key={`item ${i}`}>
                    <ProductItem item={item}/>
                </div>
            ))}
        </StyledCarousel>
    );
};
export default React.memo(NewArrivalsCarrousel);
const StyledCarousel = styled(Slider)`&&{
  .item{
    padding-right: 20px;
    &:focus{
      outline: none;
    }
  }
}`
