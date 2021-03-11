import React from 'react';
import LoopIcon from '@material-ui/icons/Loop';
import styled from 'styled-components';
import {
    CssAdditionalButton,
    CssSubmitButton,
    formTitleIconStyle, textInputCreator
} from "../form_elements";
import { useFormik } from 'formik';
import {emailValidation} from "../form_validators";
import {passwordResetRequest} from "../../../redux/reducers/authReducer";
import {useDispatch, useSelector} from "react-redux";
import {getIsResetSent} from "../../../selectors/selectors";
import { Alert } from '@material-ui/lab';

type Props = {
    handleCloseReset:()=>void
    handleClose?:()=>void
    isFetching: boolean
};
const PasswordResetForm = (props: Props) => {
    const dispatch=useDispatch();
    const isSent = useSelector(getIsResetSent);
    const formik = useFormik({
        initialValues: {
            email: '',
        },
        validationSchema: emailValidation,
        onSubmit: (values) => {
            dispatch(passwordResetRequest(values.email));
        },
    });
    return (
        <>
            <StyledFormTitle>
                <StyledFormTitleIcon/>
                reset your password
            </StyledFormTitle>
            {isSent && <StyledAlert severity="success">
                Please check your email and follow the instructions
            </StyledAlert>}
            <StyledForm onSubmit={formik.handleSubmit}>
                 {textInputCreator('email',
                     true,
                     formik.values.email,
                     formik.handleChange,
                     formik.touched.email,
                     formik.errors.email
                 )}

                <CssSubmitButton disabled={props.isFetching} type="submit" fullWidth variant="contained">
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
const StyledAlert=styled(Alert)`&&{
  font-size: 15px;
}`
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