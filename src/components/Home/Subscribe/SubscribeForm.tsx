import React from 'react';
import styled from 'styled-components';
import DraftsOutlinedIcon from '@material-ui/icons/DraftsOutlined';
import { Formik } from 'formik';
import {CssSubmitButton} from "../../defaultComponents/form_elements";
import logo from '../../../img/subscribe/electric-icon.png'

type Props = {};
const SubscribeForm = (props: Props) => {
    const handleSubmit = ({email}:{email:string}) => {
        //make api request
    }

    const validation = (values:{email:string}) => {
        const errors = {email:''};
        if (!values.email) {
            errors.email = 'Required';
        } else if (
            !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
            errors.email = 'Invalid email address';
        }
        return errors;
    }

    return (
        <StyledContainer>
            <div className="header">
                <div className="logo">
                    <DraftsOutlinedIcon/>
                </div>
                <h3>
                    Sign up to our newsletter <br/>
                    and receive 10% off your first order!
                </h3>
            </div>
            <Formik onSubmit={handleSubmit} validate={validation} initialValues={{email: ''}}>
                {({
                      values,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                  }) => (<form onSubmit={handleSubmit}>
                    <div className="input-email">
                        <input type="email"
                               name="email"
                               onChange={handleChange}
                               onBlur={handleBlur}
                               value={values.email} placeholder='Email'/>
                    </div>
                    <CssSubmitButton className='submit-btn' type='submit'>Subscribe</CssSubmitButton>
                </form>)}
            </Formik>
            <div className="image">
                <img src={logo} alt='logo'/>
            </div>
        </StyledContainer>
    );
};
export default React.memo(SubscribeForm);

const StyledContainer = styled.div`
  border: 13px solid #ccc;
  background-color: #fff;
  text-align: center;
  margin: 10px 0;
  height: 95%;
  .logo{
    margin-top: 50px;
    svg{
      font-size: 72px;
    }
  }
  h3{
    font-size: 24px;
    margin-bottom: 35px;
    line-height: 35px;
    font-weight: 400;
  }
  .submit-btn{
    width: 200px;
    height: 53px;
    font-size: 12px;
    margin-top: 35px;
    font-weight: 800;
  }
  input{
    max-width: 520px;
    height: 60px;
    width: 100%;
    margin: 0 auto;
    display: block;
    border: 1px solid #dddddd;
    border-radius: 0;
    font-size: 14px;
    line-height: 54px;
    padding: 0 25px;
  }
  .image img{
    max-width: 100%;
    margin-top: auto;
    padding: 20px;
  }
`