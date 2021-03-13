import React from 'react';
import styled from 'styled-components';
import FooterContent from "./FooterContent/FooterContent";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import {Container} from "@material-ui/core";

type Props = {};
const Footer = (props: Props) => {

    return (

        <StyledFooter>
            <Container className='container' maxWidth='xl'>
                <FooterContent/>
            </Container>
            <FooterCopyright/>
        </StyledFooter>

    );
};
export default React.memo(Footer);

const StyledFooter = styled.footer`
  padding-top: 70px;
  background-color: #555555;
`