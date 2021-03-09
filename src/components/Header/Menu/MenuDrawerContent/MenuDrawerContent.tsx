import React from 'react';
import styled from 'styled-components';
import {CssSubmitButton} from "../../../defaultComponents/form_elements";
import SubjectIcon from '@material-ui/icons/Subject';
import {grey} from "../../../css vars/colors";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {StyledMenuLink} from "../MenuList";
import LoginForm from "../../Nav/Login/LoginForm";
import RegisterForm from "../../Nav/Login/RegisterForm";
import PasswordResetForm from "../../Nav/Login/PasswordResetForm";
import CloseIcon from '@material-ui/icons/Close';

type Props = {
    handleClose:()=>void
};
const MenuDrawerContent = (props: Props) => {
    const [openLogin, setOpenLogin] = React.useState(false);
    const setOpen = () => {setOpenLogin(true)};
    const setClose = () => {setOpenLogin(false)};


    const [openResetForm, setOpenResetForm] = React.useState(false);
    const handleOpenReset = () => {setOpenResetForm(true)};
    const handleCloseReset = () => {setOpenResetForm(false)};

    const [openRegForm, setOpenRegForm] = React.useState(false);
    const handleOpenReg = () => {setOpenRegForm(true)};
    const handleCloseReg = () => {setOpenRegForm(false)};
    return (
        <StyledContainer>
            <div>
                <StyledButton className={openLogin?'disActive':''} onClick={setClose}>
                    <SubjectIcon/>
                    Menu
                </StyledButton>
                <StyledButton className={!openLogin?'disActive':''} onClick={setOpen}>
                    <AccountCircleIcon/>
                    Login
                </StyledButton>
            </div>

            <div className='content'>
                {!openLogin
                ? <StyledMenuList>
                <StyledMenuLink to='/home'>Home</StyledMenuLink>
                <StyledMenuLink to='/shop'>Shop</StyledMenuLink>
                <StyledMenuLink to='/about-us'>About Us</StyledMenuLink>
                <StyledMenuLink to='/blog'>Blog</StyledMenuLink>
                <StyledMenuLink to='/contact'>Contact</StyledMenuLink>
            </StyledMenuList>
                : !openResetForm && !openRegForm
                        ? <LoginForm handleOpenReset={handleOpenReset} handleOpenReg={handleOpenReg}/>
                        : openResetForm
                            ? <PasswordResetForm handleCloseReset={handleCloseReset}/>
                            : <RegisterForm handleCloseReg={handleCloseReg}/>}
            </div>

            <div className='footer'>
                <CssSubmitButton onClick={props.handleClose}>
                    <CloseIcon/>
                    Close
                </CssSubmitButton>
            </div>

        </StyledContainer>
    );
};
export default React.memo(MenuDrawerContent);
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