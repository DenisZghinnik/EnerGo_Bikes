import React from 'react';
import styled from 'styled-components';
import {Container, Grid} from "@material-ui/core";
import Instagram from "./Instagram";
import SubscribeForm from "./SubscribeForm";

type Props = {};
const Subscribe = (props: Props) => {

    return (
        <StyledContainer>
            <Container maxWidth='lg'>
                <Grid container>
                    <Grid item md={6} sm={12}>
                        <Instagram/>
                    </Grid>
                    <Grid item md={6} sm={12}>
                        <SubscribeForm/>
                    </Grid>
                </Grid>
            </Container>
        </StyledContainer>
    );
};
export default React.memo(Subscribe);

const StyledContainer = styled.section`
    padding-top: 125px;
    padding-bottom: 95px;
    margin-top: 85px;
    background: #faeef7;
`