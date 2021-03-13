import React from 'react';
import styled from 'styled-components';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import TelegramIcon from '@material-ui/icons/Telegram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import {hoveredGray} from "../../../css vars/linkStyles";

type Props = {};
const SocialList = (props: Props) => {

    return (
        <StyledList>
            <li>
                <a href="https://twitter.com/?lang=ru">
                    <TwitterIcon/>
                </a>
            </li>
            <li>
                <a href="https://www.instagram.com/?hl=ru">
                    <InstagramIcon/>
                </a>
            </li>
            <li>
                <a href="https://web.telegram.org/#/login">
                    <TelegramIcon/>
                </a>
            </li>
            <li>
                <a href="https://www.whatsapp.com/">
                    <WhatsAppIcon/>
                </a>
            </li>

        </StyledList>
    );
};
export default React.memo(SocialList);
const StyledList = styled.ul`
  margin-top: 20px;
  padding-left: 0;
  list-style: none;
  li{
    line-height: 24px;
    margin-top: 10px;
    display: inline-block;
  }
  li:not(:last-child){
    margin-right: .5rem;
  }
  a{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 45px;
    height: 45px;
    color: #ffffff;
    font-size: 16px;
    border-radius: 50%;
    margin: 0 5px;
    transition: all .3s;
    background-color: #333333;
    ${hoveredGray}
  }
`