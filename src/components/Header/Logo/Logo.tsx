import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../../../img/logo.png'
import styled from "styled-components";

const Logo = () => {

    return (
        <StyledLink to='/home'>
            <StyledImg src={logo} alt="logo"/>
        </StyledLink>
    );
};
export default Logo;
const StyledLink = styled(NavLink)`
  display: block;
  width: 220px;
`
const StyledImg = styled.img`
  width: 100%;
  height: auto;
`