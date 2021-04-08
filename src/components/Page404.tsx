import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type Props = {};
const Page404 = (props: Props) => {

    return (
        <StyledSection>
            <h1>404</h1>
            <h2>Oops! That Page Can`t Be Found.</h2>
            <p>The page you are looking for does not exist</p>
            <NavLink to='/home'>Please return to Home page</NavLink>
        </StyledSection>
    );
};
export default React.memo(Page404);

const StyledSection = styled.div`
  text-align: center;
  padding: 100px 0;
  h1{
    font-size: 100px;
    margin-bottom: 20px;
    font-weight: 600;
  }
  h2{
    font-size: 30px;
    font-weight: 600;
    margin-bottom: 15px;
  }
  p{
    color: #a8a8a8;
    font-size: 16px;
    margin-bottom: 15px;
    text-transform: uppercase;
  }
  a{
    color: #a8a8a8;
    text-decoration: none;
    transition: .1s;
    &:hover{
      color: #bdb099;
    }
  }
`
