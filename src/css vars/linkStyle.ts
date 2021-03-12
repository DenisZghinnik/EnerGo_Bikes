import styled from "styled-components";
import {NavLink} from "react-router-dom";
import {greyHover} from "./colors";



export const StyledLinkButton = styled(NavLink)`
  background-color: ${greyHover};
  color: #fff;
  text-transform: uppercase;
  text-decoration: none;
  letter-spacing: 1px;
  font-weight: 600;
  font-size: 15px;
  margin-top: 20px;
  margin-bottom: 20px;
  padding: 15px 40px;
  border: 1px solid ${greyHover};
  transition: all .3s;
  &:hover{
    background-color: #fff;
    color: ${greyHover};
  }
`