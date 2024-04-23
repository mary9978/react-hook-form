import *  as yup from 'yup';
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{4,})/;
export const loginSchema = yup.object().shape({
    userName: yup
    .string("your name should be text !!!")
    .required('enter your name'),
    password: yup.
    string()
    .min(4)
    .max(15)
    .required('enter your password')
    .matches(passwordRegex,"not strong !! must contain number,uppercase and symbol ")
  });