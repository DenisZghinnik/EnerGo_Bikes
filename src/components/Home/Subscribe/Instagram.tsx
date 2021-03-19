import { Grid } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import insta1 from '../../../img/subscribe/instagram1.jpg'
import insta2 from '../../../img/subscribe/instagram2.jpg'
import insta3 from '../../../img/subscribe/instagram3.jpg'
import insta4 from '../../../img/subscribe/instagram4.jpg'
import InstagramIcon from '@material-ui/icons/Instagram';

type Props = {};
const Instagram = (props: Props) => {

    return (
        <StyledGrid container>
            <Grid className='item' item sm={6}>
                <div className="img">
                    <img src={insta1} alt="insta"/>
                    <div className="hover">
                        <a href="https://www.instagram.com/">
                            <InstagramIcon/>
                            <h4>shop it</h4>
                        </a>
                    </div>
                </div>
            </Grid>
            <Grid className='item' item sm={6}>
                <div className="img">
                    <img src={insta2} alt="insta"/>
                    <div className="hover">
                        <a href="https://www.instagram.com/">
                            <InstagramIcon/>
                            <h4>shop it</h4>
                        </a>
                    </div>
                </div>
            </Grid>
            <Grid className='item' item sm={6}>
                <div className="img">
                    <img src={insta3} alt="insta"/>
                    <div className="hover">
                        <a href="https://www.instagram.com/">
                            <InstagramIcon/>
                            <h4>shop it</h4>
                        </a>
                    </div>
                </div>
            </Grid>
            <Grid className='item' item sm={6}>
                <div className="img">
                    <img src={insta4} alt="insta"/>
                    <div className="hover">
                        <a href="https://www.instagram.com/">
                            <InstagramIcon/>
                            <h4>shop it</h4>
                        </a>
                    </div>
                </div>

            </Grid>
        </StyledGrid>
    );
};
export default React.memo(Instagram);

const StyledGrid=styled(Grid)`&&{
  .item {
    position: relative;
    &:hover .hover{
      opacity: 1;
      visibility: visible;
    }
    &:hover img{
      transform: scale(1.2);
    }
    .img {
      width: 90%;
      height: 90%;
      overflow: hidden;
      margin: 10px 0;

      img {
        width: 100%;
        transition: all 4s ease;
        height: auto;
      }
    }
  }

  .hover{
    position: absolute;
    width: 90%;
    height: 90%;
    top: 10px;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background: rgba(0, 0, 0, 0.7);
    transition: all .5s ease;
    color: #fff;
    opacity: 0;
    z-index: 2;
    visibility: hidden;
    a{
      color: #fff;
      text-align: center;
      text-decoration: none;
      svg {
        font-size: 35px;
      }
    }
    h4{
      text-transform: uppercase;
    }
  }
}`