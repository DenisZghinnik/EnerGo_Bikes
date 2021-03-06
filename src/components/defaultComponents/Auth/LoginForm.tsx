import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import {
    CssAdditionalButton,
    CssSubmitButton,
    textInputCreator
} from '../form_elements';
import logo from "../../../img/logo.png";
import { useFormik } from 'formik';
import {emailValidation, passwordValidation} from "../form_validators";
import {loginRequest} from "../../../redux/reducers/authReducer";
import {useDispatch, useSelector} from 'react-redux';
import {getIsLoginFailed} from "../../../selectors/selectors";
import { Alert } from '@material-ui/lab';

type Props = {
    handleOpenReset:()=>void
    handleOpenReg:()=>void
    handleClose:()=>void
    isFetching: boolean
    isAuthorized: boolean
};
const LoginForm = (props: Props) => {
    const dispatch = useDispatch();
    const isLoginFailed = useSelector(getIsLoginFailed);

    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        validationSchema: emailValidation.concat(passwordValidation),
        onSubmit: (values) => {
            dispatch(loginRequest(values.email, values.password));
        },
    });

    return (
        <>
            <StyledLogo src={logo} alt={'logo'}/>

            <StyledForm noValidate onSubmit={formik.handleSubmit}>
                <h4>Great to have you back!</h4>

                {isLoginFailed && <Alert severity='error'>
                    Wrong email or password!
                </Alert>}
                {textInputCreator('email',
                     true,
                     formik.values.email,
                     formik.handleChange,
                     formik.touched.email,
                     formik.errors.email
                 )}
                {textInputCreator('password',
                     false,
                     formik.values.password,
                     formik.handleChange,
                     formik.touched.password,
                     formik.errors.password
                 )}
                <CssSubmitButton disabled={props.isFetching} type="submit" fullWidth variant="contained">
                    log in
                </CssSubmitButton>
                <Grid container>
                    <Grid item xs>
                        <CssAdditionalButton onClick={props.handleOpenReset}>
                            Forgot password?
                        </CssAdditionalButton>
                    </Grid>
                    <Grid item>
                        <CssAdditionalButton onClick={props.handleOpenReg}>
                            Don't have an account? Sign Up
                        </CssAdditionalButton>
                    </Grid>
                </Grid>
            </StyledForm>
        </>
    );
};
export default React.memo(LoginForm);

const StyledForm = styled.form`
  border-top: 1px solid #ccc;
  h4 {
    text-align: center;
    font-size: 25px;
    font-weight: 400;
    color: #000;
    text-transform: unset;
    padding: 30px 0 10px 0;
  }
  .error {
    color: red;
    text-align: center;
  }
`
const StyledLogo = styled.img`
  width: 300px;
  margin: 20px auto 30px auto;
`;