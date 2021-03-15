import React from 'react';
import styled from 'styled-components';
import {Grid, Tooltip, withStyles} from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import LocalMallOutlinedIcon from '@material-ui/icons/LocalMallOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import {greyHover} from "../../css vars/colors";
import StarBorderIcon from '@material-ui/icons/StarBorder';
import StarIcon from '@material-ui/icons/Star';
type Props = {
    item: {
        img: string,
        name: string,
        stars: number,
        discount: boolean,
        price: string,
        discountPrice: string,
        link: string
    }
};
const ProductItem = (props: Props) => {
    const {img, name, stars:starCount, discount, price, discountPrice, link} = props.item;
    const stars = [...new Array(starCount).fill(true),...new Array(5-starCount).fill(false)]

    return (
        <Grid item lg={3} md={4} sm={6}>
            <StyledItem>
                <div className='product-img'>
                    <div className="img">
                        <NavLink to={link}>
                            <img src={img} alt="bike"/>
                        </NavLink>
                    </div>

                    <div className="details-info">
                        <StyledTooltip title='Add to Wishlist' placement="top">
                            <button className='details-item'>
                                <FavoriteBorderIcon/>
                            </button>
                        </StyledTooltip>
                        <StyledTooltip title='Add to Cart'  placement="top">
                            <button className='details-item'>
                                <LocalMallOutlinedIcon/>
                            </button>
                        </StyledTooltip>
                        <StyledTooltip title='Quick view'  placement="top">
                            <button className='details-item'>
                                <SearchOutlinedIcon/>
                            </button>
                        </StyledTooltip>
                    </div>

                    {discount&&<div className="label-sale">
                        <span>sale</span>
                    </div>}
                </div>
                <div className="product-info">
                    <h4><NavLink to={link}>{name}</NavLink></h4>
                    <span>
                        {stars.map((a,i)=>a?<StarIcon key={i}/>:<StarBorderIcon key={i}/>
                        )}
                    </span>
                    {discount
                            ? <p><s>${price}</s> ${discountPrice}</p>
                            : <p>${price}</p>
                    }
                </div>
            </StyledItem>
        </Grid>
    );
};
export default React.memo(ProductItem);

const StyledTooltip = withStyles(() => ({
    tooltip: {
        color: '#fff',
        backgroundColor: '#000',
        fontSize: 14,
    },
}))(Tooltip);

const StyledItem = styled.div`
  margin: 30px 0;
  overflow: hidden;
  border: 1px solid #ebebeb;
  position: relative;
  &:hover{
    .img img{
      transform: scale(1.15);
    }
    .img:before, .details-info{
      visibility: visible;
      opacity: 1;
    }
    
  }
  .product-img{
    position: relative;
  }
  .img{
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    cursor: pointer;
    &:before {
      opacity: 0;
      position: absolute;
      top: 0;
      left: 0;
      content: "";
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.2);
      visibility: hidden;
      z-index: 1;
      transition: all 0.5s ease-out 0s;
    }
    a{
      position: relative;
      display: block;
    }
    img{
      width: 100%;
      vertical-align: middle;
      height: auto;
      transition: 2s;
    }
  }
  .details-info{
    opacity: 0;
    z-index: 2;
    visibility: hidden;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.3s ease-in-out;
    display: flex;
    align-items: center;

    .details-item {
      font-size: 12px;
      text-transform: uppercase;
      box-sizing: border-box;
      padding: 15px 15px;
      border: 1px solid #000;
      background: #fff;
      box-shadow: 0 3px 20px 0 rgb(0 0 0 / 10%);
      line-height: 0;
      cursor: pointer;
      transition: .2s;
      &:hover{
        background-color: ${greyHover};
        svg{
          fill: #fff
        }
      }

      svg {
        fill: #bdb099;
        height: auto;
        transition: .3s;
      }
    }
  }
  .label-sale{
    position: absolute;
    z-index: 3;
    top: 0;
    right: 0;
    width: 60px;
    height: 60px;
    background: linear-gradient(225deg, #741313 50%, transparent 50%);
    span{
      display: block;
      color: #fff;
      letter-spacing: 1px;
      line-height: 22px;
      padding: 5px 0 30px 0;
      text-transform: uppercase;
      font-size: 12px;
      font-weight: 700;
      transform: rotate(45deg);
    }
  }
  .product-info{
    padding: 0 20px;

    h4 {
      margin-top: 20px;
      margin-bottom: 15px;
      a {
        font-size: 14px;
        font-weight: 700;
        color: #333333;
        text-decoration: none;
        &:hover{
          color: ${greyHover};
        }
      }
    }
    span{
      color: #bdb099;
      svg{
        font-size: 20px;
      }
    }

    p {
      margin-bottom: 25px;
      font-weight: 600;
      font-size: 17px;
      color: #333333;
      margin-top: 20px;
      s{
        font-size: 12px;
      }
    }
  }
`