import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {styledLink} from "../../../css vars/linkStyles";

type Props = {
    category: any
};
const ShopDDCategory = (props: Props) => {

    return (
        <SubmenuContainer>
            <h5>
                <StyledTitleLink to={props.category.link}>
                    {props.category.title}
                </StyledTitleLink>
            </h5>
            <ul>
                {props.category.subCategories.map((link:any,i:any)=>(
                    <li key={'link'+i}>
                        <StyledLink to={'/shop' + link.link}>{link.title}</StyledLink>
                    </li>
                ))}


            </ul>
        </SubmenuContainer>
    );
};
export default ShopDDCategory;

const SubmenuContainer = styled.div`
  margin: 0 30px 20px 30px;
  ul{
    list-style: none;
  }
  li {
    line-height: 24px;
    padding: 8px 0;
  }
`

const StyledLink = styled(NavLink)`
  ${styledLink};
`
const StyledTitleLink = styled(NavLink)`
  ${styledLink};
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 900;
  white-space: nowrap;
  &::after{
    content: '';
    display: block;
    height: 1px;
    width: 55px;
    border-bottom: 2px solid #bdb099;
    margin-top: 17px;
    margin-bottom: 20px;
  }
  
`