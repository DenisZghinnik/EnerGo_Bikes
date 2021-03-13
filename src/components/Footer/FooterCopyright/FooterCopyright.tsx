import React from 'react';
import styled from 'styled-components';
import {Container, Grid} from "@material-ui/core";
import payments from '../../../img/pay.png'
type Props = {};
const FooterCopyright = (props: Props) => {

    return (
        <StyledFooterCopy>
            <Container  maxWidth='xl'>
                <Grid className={'container'} container>
                    <Grid item className="copy">
                        Created by <a href="https://www.linkedin.com/in/denis-zghinnik/">Denis Zghinnik</a>.
                        Copyright EnerGo-bikes
                    </Grid>
                    <Grid item className="payments">
                        <img src={payments} alt="payments"/>
                    </Grid>
                </Grid>
            </Container>
        </StyledFooterCopy>
    );
};
export default React.memo(FooterCopyright);
const StyledFooterCopy = styled.div`
  border-top: 1px solid #9a9a9a;
  padding: 26px 0;
  background-color: #555555;
  margin-top: 54px;
  font-size: 18px;
  .container{
    justify-content: space-between;
  }
  .copy{    
    color: #d6d6d6;
    font-size: 13px;
    line-height: 36px;
    a{
      color: #fff;
      text-decoration: none;
    }
  }
  @media (max-width: 600px){
    .container{
      justify-content: center;
    }
  }
`