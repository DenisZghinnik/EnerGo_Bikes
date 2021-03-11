import React from 'react';
import styled from 'styled-components';
import ShopDropDown from "./ShopDropDown/ShopDropDown";
import {styledLink} from "../../../css vars/linkStyles";
import { NavLink } from 'react-router-dom';
import {HotBadge, NewBadge} from "../../defaultComponents/Badges";

type Props = {};
const MenuList = (props: Props) => {

    return (
        <>
            <StyledMenuLink to='/home'>Home</StyledMenuLink>
            <HotBadge badgeContent="hot">
                <StyledMenuLink to='/shop'><ShopDropDown/></StyledMenuLink>
            </HotBadge>
            <StyledMenuLink to='/about-us'>About Us</StyledMenuLink>
            <NewBadge badgeContent="new">
                <StyledMenuLink to='/blog'>Blog</StyledMenuLink>
            </NewBadge>
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