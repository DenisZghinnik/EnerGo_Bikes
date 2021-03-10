import React from 'react';
import {withAuthFunc, WithAuthProps} from "../../../hoc/authHoc";
import LoginForm from "../../Header/Nav/Login/LoginForm";
import PasswordResetForm from "../../Header/Nav/Login/PasswordResetForm";
import RegisterForm from "../../Header/Nav/Login/RegisterForm";


type Props = {
    handleCloseDrawer: ()=>void
};

const AuthContainer = (props: Props & WithAuthProps) => {

    const {openResetForm, handleOpenReset, handleCloseReset,
           openRegForm, handleOpenReg, handleCloseReg} = props;

    const handleClickClose = () => {
        props.handleCloseDrawer();
        setTimeout(()=> {
            handleCloseReset();
            handleCloseReg();
        }, 300);
    };

    return (
        <>
            {!openResetForm && !openRegForm
                ? <LoginForm handleOpenReset={handleOpenReset} handleOpenReg={handleOpenReg}
                             handleClose={handleClickClose}/>
                : openResetForm
                    ? <PasswordResetForm handleCloseReset={handleCloseReset} handleClose={handleClickClose}/>
                    : <RegisterForm handleCloseReg={handleCloseReg} handleClose={handleClickClose}/>
            }
        </>
    );
};

export default React.memo(withAuthFunc(AuthContainer));