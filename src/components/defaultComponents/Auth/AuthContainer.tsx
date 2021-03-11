import React, {useEffect} from 'react';
import {withAuthFunc, WithAuthProps} from "../../../hoc/authHoc";
import LoginForm from "./LoginForm";
import PasswordResetForm from "./PasswordResetForm";
import RegisterForm from "./RegisterForm";
import {useSelector} from "react-redux";
import {getIsAuthorized, getIsLoginFetching} from "../../../selectors/selectors";
import {Redirect} from "react-router";


type Props = {
    handleCloseDrawer: ()=>void
};

const AuthContainer = (props: Props & WithAuthProps) => {
    const isFetching = useSelector((getIsLoginFetching));
    const isAuthorized = useSelector(getIsAuthorized);

    const {openResetForm, handleOpenReset, handleCloseReset,
           openRegForm, handleOpenReg, handleCloseReg} = props;

    useEffect(() => {if (isAuthorized) props.handleCloseDrawer()});

    const handleClickClose = () => {
        props.handleCloseDrawer();
        setTimeout(()=> {
            handleCloseReset();
            handleCloseReg();
        }, 300);
    };

    if (isAuthorized) return <Redirect to='/profile'/>;
    return (
        <>
            {!openResetForm && !openRegForm
                ? <LoginForm isAuthorized={isAuthorized}
                             isFetching={isFetching}
                             handleOpenReset={handleOpenReset}
                             handleOpenReg={handleOpenReg}
                             handleClose={handleClickClose}/>
                : openResetForm

                    ? <PasswordResetForm isFetching={isFetching}
                                         handleCloseReset={handleCloseReset}
                                         handleClose={handleClickClose}/>

                    : <RegisterForm isAuthorized={isAuthorized}
                                    isFetching={isFetching}
                                    handleCloseReg={handleCloseReg}
                                    handleClose={handleClickClose}/>
            }
        </>
    );
};

export default React.memo(withAuthFunc(AuthContainer));