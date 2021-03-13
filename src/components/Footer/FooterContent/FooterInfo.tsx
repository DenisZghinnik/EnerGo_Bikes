import React from 'react';
import styled from 'styled-components';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import {greyHover} from "../../../css vars/colors";
import SocialList from "./SocialList";
import { Formik } from 'formik';
type Props = {};


const FooterInfo = (props: Props) => {
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
        <StyledFooterInfo>
            <h4>The good stuff in your inbox</h4>
            <p className='text'>
                News & updates from E-bike. <br/>
                No spam, we promise.
            </p>
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
                    <button type='submit'>Sign up <ChevronRightIcon/></button>
                </form>)}
            </Formik>
            <SocialList/>
        </StyledFooterInfo>
    );
};
export default React.memo(FooterInfo);
const StyledFooterInfo = styled.div`
  h4{
    font-size: 20px;
    text-transform: none;
    color: #fff;
    font-weight: 700;
  }
  .text{
    color: #d6d6d6;
    font-weight: 400;
    margin-top: 23px;
    font-size: 13px;
  }
  form{
    margin-top: 20px;
    width: 100%;
    position: relative;
    display: flex;
    flex-flow: row wrap;
    align-items: center;
  }
  .input-email{
    width: 100%;

    input {
      display: block;
      width: 100%;
      height: calc(2.25rem + 2px);
      padding: .375rem 6.3rem 0.375rem .75rem;
      font-size: 13px;
      line-height: 1.5;
      color: #555555;
      background-color: #eee;
      border: none;
      &:focus{
        outline: none;
      }
    }
  }
  button {
    font-weight: 600;
    text-transform: uppercase;
    position: absolute;
    right: 0;
    top: 0;
    height: calc(2.25rem + 2px);
    background-color: ${greyHover};
    color: #fff;
    padding: .375rem .75rem .375rem .75rem;
    font-size: 11px;
    line-height: 1.5;
    cursor: pointer;
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    border: none;
    transition: all .2s;
    &:hover{
      background-color: #fff;
      color: ${greyHover};
    }
    svg{
      position: absolute;
      top: 50%;
      right: 8px;
      transform: translateY(-50%);
      font-size: 14px;
    }
  }
  @media (max-width: 956px) {
    text-align: center;
  }
`