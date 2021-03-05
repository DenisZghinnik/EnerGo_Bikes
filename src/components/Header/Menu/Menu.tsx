import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ShopDropDown from "./ShopDropDown/ShopDropDown";
import {styledLink} from "../../css vars/linkStyles";


const Menu = () => {

    return (
        <nav>
            <StyledLink to='/home'>Home</StyledLink>
            <StyledLink to='/shop'><ShopDropDown/></StyledLink>
            <StyledLink to='/about-us'>About Us</StyledLink>
            <StyledLink to='/blog'>Blog</StyledLink>
            <StyledLink to='/contact'>Contact</StyledLink>
        </nav>
    );
};
export default Menu;

const StyledLink = styled(NavLink)`
  ${styledLink};
  font-size: 18px;
  margin: 0 15px;
  font-weight: 900;
  
`