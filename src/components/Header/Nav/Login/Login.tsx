import React, {useState} from 'react';
import styled from 'styled-components';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import {Dialog, Hidden} from "@material-ui/core";
import {navStyle} from "../../../css vars/navStyles";
import LoginForm from "./LoginForm";
import PasswordResetForm from "./PasswordResetForm";
import RegisterForm from "./RegisterForm";

const Login = () => {
    const [open, setOpen] = useState(false);
    const handleOpen = () => {setOpen(true)};
    const handleClose = () => {
        setOpen(false);
        setTimeout(()=> {
            handleCloseReset();
            handleCloseReg();
        }, 300);
    };

    const [openResetForm, setOpenResetForm] = useState(false);
    const handleOpenReset = () => {setOpenResetForm(true)};
    const handleCloseReset = () => {setOpenResetForm(false)};

    const [openRegForm, setOpenRegForm] = useState(false);
    const handleOpenReg = () => {setOpenRegForm(true)};
    const handleCloseReg = () => {setOpenRegForm(false)};
    return (
        <>
            <Hidden mdDown>
                <StyledLoginIcon onClick={handleOpen}/>

                <StyledDialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                    {!openResetForm && !openRegForm
                        ? <LoginForm handleOpenReset={handleOpenReset} handleOpenReg={handleOpenReg}
                                     handleClose={handleClose}/>
                        : openResetForm
                            ? <PasswordResetForm handleCloseReset={handleCloseReset} handleClose={handleClose}/>
                            : <RegisterForm handleCloseReg={handleCloseReg} handleClose={handleClose}/>
                    }
                </StyledDialog>
            </Hidden>

        </>
    );
};
export default React.memo(Login);

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

