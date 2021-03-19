import React from 'react';
import styled from 'styled-components';
import {homeSectionTitle} from "../../../css vars/homeSectionTItle";
import NewArrivalsCarrousel from "./NewArrivalsCarousel/NewArrivalsCarrousel";
import {Container} from "@material-ui/core";

type Props = {};
const NewArrivals = (props: Props) => {


    return (
        <StyledContainer>
            <div className='header-title'>
                <h3>new arrivals</h3>
                <span>A</span>
            </div>
            <Container maxWidth='lg'>
                <NewArrivalsCarrousel/>
            </Container>
        </StyledContainer>
    );
};
export default React.memo(NewArrivals);
const StyledContainer = styled.section`
  margin-top: 100px;
  text-align: center;
  .header-title{
    ${homeSectionTitle};
    position: relative;
    span{
      font-size: 90px;
    }
  }
`