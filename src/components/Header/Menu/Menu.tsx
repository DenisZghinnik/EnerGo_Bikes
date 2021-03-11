import React from 'react';
import styled from 'styled-components';
import {Drawer, Hidden} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import {navStyle} from "../../../css vars/navStyles";
import MenuDrawerContent from "./MenuDrawerContent/MenuDrawerContent";
import MenuList from "./MenuList";
import {useDispatch} from "react-redux";
import {authReducerActions} from "../../../redux/reducers/authReducer";
import {withOpenFunc, WithOpenFuncProps} from "../../../hoc/withOpenFunc";


const Menu = (props:WithOpenFuncProps) => {
    const dispatch=useDispatch();
    const {open, handleOpen, handleClose} = props;
    const handleClickClose = () => {
        handleClose();
        dispatch(authReducerActions.clearMessages())
    };

    return (
        <>
            <Hidden mdDown>
                <nav>
                    <MenuList/>
                </nav>
            </Hidden>

            <Hidden lgUp>
                <StyledIcon onClick={handleOpen}/>

                <Drawer anchor='left' open={open} onClose={handleClickClose}>
                    <MenuDrawerContent handleCloseDrawer={handleClickClose}/>
                </Drawer>
            </Hidden>
        </>
    );
};
export default withOpenFunc(Menu);

const StyledIcon = styled(MenuIcon)`&&{
  ${navStyle};
  font-size: 50px;
}`
