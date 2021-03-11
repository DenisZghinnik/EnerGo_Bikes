import React from 'react';
import styled from 'styled-components';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {Dialog, Hidden} from "@material-ui/core";
import {navStyle} from "../../../../css vars/navStyles";
import {withOpenFunc, WithOpenFuncProps} from "../../../../hoc/withOpenFunc";
import AuthContainer from "../../../defaultComponents/Auth/AuthContainer";
import {useDispatch} from "react-redux";
import {authReducerActions} from "../../../../redux/reducers/authReducer";

const Login = (props: WithOpenFuncProps) => {
    const dispatch=useDispatch();
    const {open, handleClose, handleOpen} = props;
    const handleClickClose = () => {
        handleClose();
        dispatch(authReducerActions.clearMessages())
    };

    return (
        <>
            <Hidden mdDown>
                <StyledLoginIcon onClick={handleOpen}/>

                <StyledDialog open={open} onClose={handleClickClose} aria-labelledby="form-dialog-title">
                    <AuthContainer handleCloseDrawer={handleClose}/>
                </StyledDialog>
            </Hidden>

        </>
    );
};

export default React.memo(withOpenFunc(Login));

const StyledDialog = styled(Dialog)`
  .MuiDialog-paper{
    width: 600px;
    min-height: 653.33px;
    padding: 50px 80px 120px 80px;
  }
`;
const StyledLoginIcon = styled(PersonOutlineIcon)`&&{
  ${navStyle};
  margin-left: 20px;
}`;

