import React from 'react';
import styled from 'styled-components';
import {Container, Grid} from "@material-ui/core";
import TopAccessoriesItem from "./TopAccesoriesItem";
import saddleImg from '../../../img/TopAccesories/saddle.jpg'
import batteryImg from '../../../img/TopAccesories/battery.jpg'
import handlebarsImg from '../../../img/TopAccesories/handlebars.jpg'
import {homeSectionTitle} from "../../../css vars/homeSectionTItle";

const saddleCategory={
    title: 'saddle bike',
    desc: 'They never said winning was easy. Some people can’t handle success, I can. Lion! Special cloth alert',
    img: saddleImg,
    link: '/shop/accessories/saddle'
}
const batteryCategory={
    title: 'pedal & wheel',
    desc: 'They never said winning was easy. Some people can’t handle success, I can. Lion! Special cloth alert',
    img: batteryImg,
    link: '/shop/accessories/pedal'
}
const handlebarCategory={
    title: 'handlebars',
    desc: 'You see the hedges, how I got it shaped up? It’s important to shape up your hedges, it’s like getting a haircut',
    img: handlebarsImg,
    link: '/shop/accessories/handlebars'
}


type Props = {};
const TopAccessories = (props: Props) => {

    return (
        <StyledAccessories>
            <Container maxWidth='lg'>
               <div className='header'>
                   <div className='header-title'>
                        <h3>top accessories</h3>
                       <span>A</span>
                   </div>
                   <p className='header-text'>
                       It’s important to use cocoa butter. It’s the key to more success,
                       why not live smooth? Why live rough? Watch your back, but more
                       importantly when you get out the shower
                   </p>
                   </div>
                <Grid container>
                    <TopAccessoriesItem className='border' category={saddleCategory}/>
                    <TopAccessoriesItem className='border' category={batteryCategory}/>
                    <TopAccessoriesItem category={handlebarCategory}/>
                </Grid>
            </Container>
        </StyledAccessories>
    );
};
export default React.memo(TopAccessories);

const StyledAccessories = styled.div`
    margin-top: 100px;
    position: relative;
  .header{
    text-align: center
  }
  .header-title{
    ${homeSectionTitle};
    position: relative;
  }
  .header-text {
    font-size: 18px;
    margin-top: 40px;
  }
  .border {
    border-right: 1px solid #eeeeee;
  }
`