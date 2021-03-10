import React from 'react';
import styled from 'styled-components';
import ShopDropDown from "./ShopDropDown/ShopDropDown";
import {styledLink} from "../../../css vars/linkStyles";
import { NavLink } from 'react-router-dom';

type Props = {};
const MenuList = (props: Props) => {

    return (
        <>
            <StyledMenuLink to='/home'>Home</StyledMenuLink>
            <StyledMenuLink to='/shop'><ShopDropDown/></StyledMenuLink>
            <StyledMenuLink to='/about-us'>About Us</StyledMenuLink>
            <StyledMenuLink to='/blog'>Blog</StyledMenuLink>
            <StyledMenuLink to='/contact'>Contact</StyledMenuLink>
        </>
    );
};
export default React.memo(MenuList);
export const StyledMenuLink = styled(NavLink)`
  ${styledLink};
  font-size: 15px;
  margin: 0 15px;
  font-weight: 900;
  
`