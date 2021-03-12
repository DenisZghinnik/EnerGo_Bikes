import React from 'react';
import styled from 'styled-components';
import { StyledLinkButton } from '../../../css vars/linkStyle';
import {greyHover} from "../../../css vars/colors";
type Props = {
    content: {
    text1: string
    text2: string
    text3: string
    text4: string
    }
    animate: boolean
};
const SliderItemContent = (props: Props) => {
    const {text1,text2,text3,text4} = props.content;

    return (
        <StyledContainer open={props.animate}>
            <div className='item-content'>
                <p>{text1} </p>
                <h3>{text2}</h3>
                <h1><span>{text3}</span><br/> {text4}</h1>
                <StyledLinkButton style={{
                    position: 'absolute',
                    bottom: '-45px'
                }} to='/shop'>
                    Shop now
                </StyledLinkButton>
            </div>
        </StyledContainer>
    );
};
export default React.memo(SliderItemContent);

const StyledContainer = styled.div<{open:boolean}>`

  position: absolute;
  left: 12%;
  top: 50%;
  transform: translateY(-60%);
  z-index: 20;

  .item-content {
    background-color: rgba(255, 255, 255, 0.9);
    height: 330px;
    width: 450px;
    position: relative;
    padding: 60px 50px 60px 60px;

    &:before {
      content: "";
      background: ${greyHover};
      width: 4px;
      height: 177px;
      position: absolute;
      left: 45px;
      top: 65px;
      transform: ${(p)=>p.open ? 'translateY(0)' : 'translateY(-30px)'};
      opacity: ${(p)=>p.open ? 1 : 0};
      transition: .5s linear .4s;
    }
  }

  p {
    font-size: 16px;
    line-height: 22px;
    font-weight: 600;
    color: ${greyHover};
    text-transform: uppercase;
    margin-bottom: 0;
    letter-spacing: 3px;
    transform: ${(p)=>p.open ? 'translateY(0)' : 'translateY(-20px)'};
    opacity: ${(p)=>p.open ? 1 : 0};
    transition: .5s linear;
  }

  h3 {
    font-size: 30px;
    font-weight: 400;
    line-height: 40px;
    letter-spacing: 1px;
    color: black;
    margin-bottom: 12px;
    display: inline-block;
    text-align: left;
    white-space: nowrap;
    text-transform: uppercase;
    margin-top: 14px;
    transform: ${(p)=>p.open ? 'translateY(0)' : 'translateX(-300px)'};
    opacity: ${(p)=>p.open ? 1 : 0};
    transition: all .5s linear 0.4s;
  }

  h1 {
    font-size: 60px;
    font-weight: 600;
    line-height: 60px;
    letter-spacing: 1px;
    color: black;
    margin-bottom: 40px;
    text-transform: uppercase;
    transform: ${(p)=>p.open ? 'translateY(0)' : 'translateX(300px)'};
    opacity: ${(p)=>p.open ? 1 : 0};
    transition: all .5s linear 0.4s;

    span {
      color: #bdb099;
      font-weight: 500;
    }
  }
`