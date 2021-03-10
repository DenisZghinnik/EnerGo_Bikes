import React from 'react';
import styled from 'styled-components';
import {CssSubmitButton} from "../../../defaultComponents/form_elements";
import SubjectIcon from '@material-ui/icons/Subject';
import {grey} from "../../../../css vars/colors";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {StyledMenuLink} from "../MenuList";
import CloseIcon from '@material-ui/icons/Close';
import {withOpenFunc, WithOpenFuncProps} from "../../../../hoc/withOpenFunc";
import AuthContainer from "../../../defaultComponents/Auth/AuthContainer";

type Props = {
    handleCloseDrawer:()=>void
};

const MenuDrawerContent = (props: Props & WithOpenFuncProps) => {

    const {open, handleOpen, handleClose} = props;

    return (
        <StyledContainer>
            <div>
                <StyledButton className={open?'disActive':''} onClick={handleClose}>
                    <SubjectIcon/>
                    Menu
                </StyledButton>
                <StyledButton className={!open?'disActive':''} onClick={handleOpen}>
                    <AccountCircleIcon/>
                    Login
                </StyledButton>
            </div>

            <div className='content'>
                {!open
                    ? <StyledMenuList>
                        <StyledMenuLink to='/home'>Home</StyledMenuLink>
                        <StyledMenuLink to='/shop'>Shop</StyledMenuLink>
                        <StyledMenuLink to='/about-us'>About Us</StyledMenuLink>
                        <StyledMenuLink to='/blog'>Blog</StyledMenuLink>
                        <StyledMenuLink to='/contact'>Contact</StyledMenuLink>
                    </StyledMenuList>
                    : <AuthContainer handleCloseDrawer={props.handleCloseDrawer}/>}
            </div>

            <div className='footer'>
                <CssSubmitButton>
                    <CloseIcon/>
                    Close
                </CssSubmitButton>
            </div>

        </StyledContainer>
    );
};


export default React.memo(withOpenFunc(MenuDrawerContent));

const StyledMenuList = styled.nav`&&{
  a{
    display: block;
    width: 100%;
    padding: 20px 0;
    text-transform: uppercase;
    font-weight: 600;
  }
}`
const StyledButton = styled(CssSubmitButton)`&&{
  width: 50%;
  border-radius: 0;
  border-bottom: 1px solid #e5e5e5;
  margin: 0;
  svg{
    margin-right: 5px;
  }
}`
const StyledContainer = styled.div`
  width: 380px;
  height: 100%;
  position: relative;
  @media (max-width: 500px){
    width: 100%;
  }
  .disActive{
    background-color: #fff;
    color: ${grey};
  }
  .content{
    padding: 30px;
  }
  .footer{
    position: absolute;
    bottom: 0;
    width: 100%;
    button{
      width: 100%;
      border-radius: 0;
      margin: 0;
      letter-spacing: normal;
      svg{
        margin-right: 10px;
      }
    }
  }
`