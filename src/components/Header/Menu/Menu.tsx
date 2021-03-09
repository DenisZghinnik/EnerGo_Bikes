import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import ShopDropDown from "./ShopDropDown/ShopDropDown";
import {styledLink} from "../../css vars/linkStyles";
import {Drawer, Hidden} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {navStyle} from "../../css vars/navStyles";
import MenuDrawerContent from "./MenuDrawerContent/MenuDrawerContent";
import MenuList from "./MenuList";

const Menu = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {setOpen(false)};
    return (
        <>
            <Hidden mdDown>
                <nav>
                    <MenuList/>
                </nav>
            </Hidden>

            <Hidden lgUp>
                <StyledIcon onClick={handleOpen}/>

                <Drawer anchor='left' open={open} onClose={handleClose}>
                    <MenuDrawerContent handleClose={handleClose}/>
                </Drawer>
            </Hidden>
        </>
    );
};
export default Menu;

const StyledIcon = styled(MenuIcon)`&&{
  ${navStyle};
  font-size: 50px;
}`
