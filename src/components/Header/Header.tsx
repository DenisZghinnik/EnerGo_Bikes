import React from 'react';
import styled from 'styled-components';
import Logo from "./Logo/Logo";
import {Grid} from "@material-ui/core";
import Menu from "./Menu/Menu";
import Nav from "./Nav/Nav";


const Header = () => {

    return (
        <HeaderContainer container justify='center'>
            <Grid justify='flex-start' alignItems='center' container item xs>
                <Menu/>
            </Grid>
            <Grid justify='center' alignItems='center' container item xs>
                <Logo/>
            </Grid>
            <Grid justify='flex-end' container alignItems='center' item xs>
                <Nav/>
            </Grid>
        </HeaderContainer>
    );
};
export default Header;

const HeaderContainer = styled(Grid)`
  padding: 30px;
`