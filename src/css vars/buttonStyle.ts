import {Button, withStyles} from "@material-ui/core";
import {greyHover} from "./colors";
import {css} from "styled-components";

export const CssButton = withStyles({
    root: {
        height: '60px',
        backgroundColor: '#000',
        fontSize: '15px',
        color: '#fff',
        textTransform: 'uppercase',
        letterSpacing: '2px',
        fontWeight: 600,
        marginTop: '20px',
        marginBottom: '20px',
        borderRadius: 0,
        '&:hover' : {
            backgroundColor: greyHover,
        }
    }
})(Button)

export const buttonMainStyle = css`
  font-size: 16px;
  color: #fff;
  background: #333333;
  display: inline-block;
  font-weight: 700;
  position: relative;
  overflow: hidden;
  border-radius: 0;
  transition: .3s;
  text-decoration: none;
  &:hover{
    background-color: ${greyHover};
  }
`

export const buttonMain2Style = css`
  text-align: center;
  display: block;
  height: 50px;
  line-height: 48px;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: .1em;
  text-transform: uppercase;
  border: 1px solid #dadada;
  background-color: #fff;
  color: #5e5e5e;
  padding: 0 20px;
  transition: .3s;
  cursor: pointer;
  &:focus{
    outline: none;
  }
  &:hover{
    background-color: #bdb099;
    border-color: #bdb099;
    color: #fff;
  }
`