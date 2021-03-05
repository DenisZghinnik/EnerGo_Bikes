import React from 'react';
import styled from 'styled-components';
import Logo from "./Logo/Logo";
import {Grid} from "@material-ui/core";
import Menu from "./Menu/Menu";


const Header = () => {

    return (
        <HeaderContainer container justify='center'>
            <Grid justify='flex-start' alignItems='center' container item xs>
                <Menu/>

            </Grid>
            <Grid justify='center' container item xs>
                <Logo/>
            </Grid>
            <Grid justify='flex-end' container item xs>
                <Logo/>
            </Grid>
        </HeaderContainer>
    );
};
export default Header;

const HeaderContainer = styled(Grid)`
  padding: 30px;
`