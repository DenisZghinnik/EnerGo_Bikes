import React from 'react';
import styled from 'styled-components';
import {homeSectionTitle} from "../../../css vars/homeSectionTItle";
import {Container, Grid} from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import img1 from '../../../img/home/shop_by_category/sun-bike.webp'
import smallImg1 from '../../../img/home/shop_by_category/bike.webp'
import img2 from '../../../img/home/shop_by_category/3bike.webp'
import smallImg2 from '../../../img/home/shop_by_category/scooter.webp'
import img3 from '../../../img/home/shop_by_category/2bike.webp'
import smallImg3 from '../../../img/home/shop_by_category/smallbike.webp'



type Props = {};
const ShopByCategory = (props: Props) => {

    return (
        <StyledContainer>
            <div className='header-title'>
                <h3>Shop by category</h3>
                <span>S</span>
            </div>
            <Container maxWidth='lg'>
                <Grid container alignItems='center'>
                    <Grid className='item img' item lg={6} md={12}>
                        <img src={img1} alt="bike"/>
                    </Grid>
                    <Grid className='item' item lg={6} md={12}>
                        <div className="info">
                            <h3 className="title">
                                E-Bike Safety
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing simply dummy
                                text of the printing simply dummy text of the printing simply
                                dummy text of the printing simply dummy text of the printing
                            </p>
                            <div className="small-img">
                                <img src={smallImg1} alt="bike"/>
                            </div>
                            <NavLink to='/shop/bikes'>
                                View All Collection
                            </NavLink>
                        </div>
                    </Grid>
                </Grid>
                <Grid container alignItems='center'>
                     <Grid className='item' item lg={6} md={12}>
                        <div className="info">
                            <h3 className="title">
                                E-Bike Safety
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing simply dummy
                                text of the printing simply dummy text of the printing simply
                                dummy text of the printing simply dummy text of the printing
                            </p>
                            <div className="small-img">
                                <img src={smallImg2} alt="bike"/>
                            </div>
                            <NavLink to='/shop/scooters'>
                                View All Collection
                            </NavLink>
                        </div>
                    </Grid>
                    <Grid className='item img' item lg={6} md={12}>
                        <img src={img2} alt="bike"/>
                    </Grid>
                </Grid>
                <Grid container alignItems='center'>
                    <Grid className='item img' item lg={6} md={12}>
                        <img src={img3} alt="bike"/>
                    </Grid>
                    <Grid className='item' item lg={6} md={12}>
                        <div className="info">
                            <h3 className="title">
                                E-Bike Safety
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing simply dummy
                                text of the printing simply dummy text of the printing simply
                                dummy text of the printing simply dummy text of the printing
                            </p>
                            <div className="small-img">
                                <img src={smallImg3} alt="bike"/>
                            </div>
                            <NavLink to='/shop/bikes'>
                                View All Collection
                            </NavLink>
                        </div>
                    </Grid>
                </Grid>
            </Container>
        </StyledContainer>
    );
};
export default React.memo(ShopByCategory);

const StyledContainer = styled.section`
  text-align: center;
  margin-top: 100px;
  .header-title{
    ${homeSectionTitle};
    position: relative;
    span{
      font-size: 90px;
    }
  }
  .item{
    margin-top: 30px;
    .img img{
      width: 100%;
      height: auto;
    }
    img{
      max-width: 100%;
    }
    .title{
      font-size: 36px;
      color: #333333;
      font-weight: 700;
      margin-bottom: 25px;
    }

    p {
      font-size: 14px;
      color: #333333;
      font-weight: 500;
      margin: 0 0 15px 30px;
    }
  }
  .info{
    padding: 0 50px;
    text-align: center;
  }
  a{
    display: inline-block;
    margin-top: 50px;
    font-size: 13px;
    font-weight: 600;
    padding: 10px 15px;
    color: #333333;
    border: 2px solid #333333;
    transition: .3s;
    text-decoration: none;
    &:hover{
      border: 2px solid #bdb099;
      color: #bdb099;
    }
  }
`