import React from 'react';
import styled from 'styled-components';
import {
    CssAdditionalButton,
    CssSubmitButton,
    formTitleIconStyle, textInputCreator
} from "../../../defaultComponents/form_elements";
import {StyledFormTitle} from "./PasswordResetForm";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useFormik } from 'formik';
import {emailValidation, passwordValidation} from "../../../defaultComponents/form_validators";

type Props = {
    handleCloseReg:()=>void
    handleClose?:()=>void
};
const RegisterForm = (props: Props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        validationSchema: emailValidation.concat(passwordValidation),
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <>  <StyledFormTitle>
                <StyledFormTitleIcon/>
                register
            </StyledFormTitle>

            <StyledForm onSubmit={formik.handleSubmit}>
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
                    Register
                </CssSubmitButton>
                <CssAdditionalButton onClick={props.handleCloseReg}>
                  Back to login <ArrowForwardIcon/>
                </CssAdditionalButton>
            </StyledForm>
        </>
    );
};
export default React.memo(RegisterForm);
const StyledFormTitleIcon = styled(AssignmentIndIcon)`&&{
  ${formTitleIconStyle}
}`
const StyledForm = styled.form`
  text-align: center;
`