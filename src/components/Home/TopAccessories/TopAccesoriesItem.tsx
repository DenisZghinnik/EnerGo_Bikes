import React from 'react';
import styled from 'styled-components';
import {Grid} from "@material-ui/core";
import { NavLink } from 'react-router-dom';
import Nav from "../../Header/Nav/Nav";
import {buttonMainStyle} from "../../../css vars/buttonStyle";

type Props = {
    category: {
    title: string,
    desc: string
    img: string
    link: string
    }
    className?:string
};
const TopAccessoriesItem = (props: Props) => {

    return (
        <Grid item lg={4} md={4} >
            <StyledItem className={props.className}>
                <div className="img">
                    <NavLink className='img-link' to={props.category.link}>
                        <img src={props.category.img} alt="saddle"/>
                    </NavLink>
                </div>
                <h3>{props.category.title}</h3>
                <p>{props.category.desc}</p>
                <NavLink to={props.category.link} className='button'>Shop now</NavLink>
            </StyledItem>
        </Grid>
    );
};
export default React.memo(TopAccessoriesItem);
const StyledItem = styled.div`
  position: relative;
  text-align: center;
  padding: 0 20px;
  margin-top: 30px;
  margin-bottom: 1rem;

  &:hover {
    .img-link:before {
      opacity: 0.4;
      z-index: 2;
    }
    .img-link img {
      transform: scale(1.02);
    }
  }
  .img-link {
    position: relative;
    display: inline-block;
    vertical-align: middle;
    border-radius: 50%;
    max-width: 200px;
    max-height: 200px;
    img{
      border-radius: 50%;
      max-width: 100%;
      height: auto;
      transition: all 1s;
    }

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 90%;
      height: 90%;
      border: 10px solid #f3f3f3;
      border-radius: 50%;
      opacity: 0;
      filter: alpha(opacity=0);
      -webkit-transition: all 0.4s ease;
      transition: all 0.4s ease;
    }
  }
  h3{
    font-size: 30px;
    font-weight: 700;
    letter-spacing: 1px;
    text-transform: uppercase;
    margin-top: 20px;
    color: #c5a645;
  }
  p{
    font-size: 18px;
    max-width: 350px;
    margin: 25px auto 30px;
    color: #7c7c7c;
  }
  .button{
    ${buttonMainStyle};
    font-size: 15px;
    padding: 15px 40px;
    margin-bottom: 30px;
  }
`