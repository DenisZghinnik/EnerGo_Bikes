import * as yup from 'yup';

export const emailValidation = yup.object({
  email: yup
    .string().max(30, 'Max length is 30')
    .email('Enter a valid email')
    .required('Email is required')
});
export const passwordValidation = yup.object({
  password: yup
    .string()
    .min(8, 'Password should be of minimum 6 characters length')
    .required('Password is required'),
});