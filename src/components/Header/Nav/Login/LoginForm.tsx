import React from 'react';
import styled from 'styled-components';
import { Grid } from '@material-ui/core';
import {
    CssAdditionalButton,
    CssSubmitButton,
    textInputCreator
} from '../../../defaultComponents/form_elements';
import logo from "../../../../img/logo.png";
import { useFormik } from 'formik';
import {emailValidation, passwordValidation} from "../../../defaultComponents/form_validators";

type Props = {
    handleOpenReset:()=>void
    handleOpenReg:()=>void
    handleClose:()=>void
};
const LoginForm = (props: Props) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        validationSchema: emailValidation.concat(passwordValidation),
        onSubmit: (values) => {
            props.handleClose()
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <StyledLogo src={logo} alt={'logo'}/>

            <StyledForm noValidate onSubmit={formik.handleSubmit}>
                <h4>Great to have you back!</h4>
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
                <CssSubmitButton type="submit" fullWidth variant="contained">
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
`
const StyledLogo = styled.img`
  width: 300px;
  margin: 20px auto 30px auto;
`;