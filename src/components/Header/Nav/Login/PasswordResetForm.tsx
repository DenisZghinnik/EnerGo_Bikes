import React from 'react';
import LoopIcon from '@material-ui/icons/Loop';
import styled from 'styled-components';
import {
    CssAdditionalButton,
    CssSubmitButton,
    formTitleIconStyle, textInputCreator
} from "../../../defaultComponents/form_elements";
import { useFormik } from 'formik';
import {emailValidation} from "../../../defaultComponents/form_validators";



type Props = {
    handleCloseReset:()=>void
    handleClose?:()=>void
};
const PasswordResetForm = (props: Props) => {

    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: emailValidation,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <>
            <StyledFormTitle>
                <StyledFormTitleIcon/>
                reset your password
            </StyledFormTitle>
            <StyledForm onSubmit={formik.handleSubmit}>
                 {textInputCreator('email',
                     true,
                     formik.values.email,
                     formik.handleChange,
                     formik.touched.email,
                     formik.errors.email
                 )}

                <CssSubmitButton type="submit" fullWidth variant="contained">
                    submit
                </CssSubmitButton>
                <CssAdditionalButton onClick={props.handleCloseReset}>
                    Cancel
                </CssAdditionalButton>
            </StyledForm>
        </>
    );
};
export default React.memo(PasswordResetForm);
const StyledForm = styled.form`
  text-align: center;
`
export const StyledFormTitle = styled.h3`
  font-size: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-weight: 600;
  padding-bottom: 20px;
  text-align: center;
`
const StyledFormTitleIcon = styled(LoopIcon)`&& {
  ${formTitleIconStyle}
}`