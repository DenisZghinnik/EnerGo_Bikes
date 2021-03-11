import React from 'react';
import styled from 'styled-components';
import {
    CssAdditionalButton,
    CssSubmitButton,
    formTitleIconStyle, textInputCreator
} from "../form_elements";
import {StyledFormTitle} from "./PasswordResetForm";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import { useFormik } from 'formik';
import {emailValidation, passwordValidation} from "../form_validators";
import {useDispatch, useSelector} from "react-redux";
import {registerRequest} from "../../../redux/reducers/authReducer";
import {getAuthErrorMessage} from "../../../selectors/selectors";
import { Alert } from '@material-ui/lab';

type Props = {
    handleCloseReg:()=>void
    handleClose?:()=>void
    isFetching: boolean
    isAuthorized: boolean
};
const RegisterForm = (props: Props) => {
    const dispatch = useDispatch();
    const errorMessage=useSelector(getAuthErrorMessage);

    const formik = useFormik({
        initialValues: {
            email: '',
            password:''
        },
        validationSchema: emailValidation.concat(passwordValidation),
        onSubmit: (values) => {
            dispatch(registerRequest(values.email, values.password));
        },
    });

    return (
        <>  <StyledFormTitle>
                <StyledFormTitleIcon/>
                register
            </StyledFormTitle>
            {errorMessage && <Alert severity='error'>
                {errorMessage}
            </Alert>}
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
                <CssSubmitButton disabled={props.isFetching} type="submit" fullWidth variant="contained">
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