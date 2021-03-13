import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

type Props = {
    title: string,
    links: {
        name: string,
        link: string
    }[]
};
const FooterList = (props: Props) => {

    return (
        <StyledList>
            <h4>{props.title}</h4>
            <ul>
                {props.links.map((a,i)=>(
                    <li key={`footer-link${i}`}>
                        <NavLink to={a.link}>
                            {a.name}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </StyledList>
    );
};
export default React.memo(FooterList);
const StyledList = styled.nav`
  h4{
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 700;
    color: #ffffff;

    &::after {
      content: '';
      display: block;
      height: 1px;
      width: 55px;
      margin-top: 17px;
      background-color: #ffffff;
    }
  }
  ul{
    padding-left: 0;
    list-style: none;
    margin-top: 20px;
    margin-bottom: 20px;
    li{
      line-height: 24px;
      margin-top: 10px;
    }
  }
  a {
    color: #d6d6d6;
    text-decoration: none;
    transition: all .25s ease-in-out;
    font-size: 14px;
    &:hover{
      color: #ffffff;
    }
  }
`