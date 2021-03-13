import React from 'react';
import styled from 'styled-components';
import {Grid} from "@material-ui/core";
import FooterList from "./FooterList";
import FooterInfo from "./FooterInfo";

const servicesLinks = [
    {
    name: 'E-bike repair',
    link: '/services/repair'
    },
    {
    name: 'Worldwide shipping',
    link: '/services/shipping'
    },
    {
    name: 'Free return',
    link: '/services/return'
    },
    {
    name: 'Member discount',
    link: '/services/discount'
    },
    {
    name: '24/7 Support',
    link: '/services/support'
    },
]
const informationLinks = [
    {
    name: 'About Us',
    link: '/about-us'
    },
    {
    name: 'Contact Us',
    link: '/contact'
    },
    {
    name: 'All Collections',
    link: '/collections'
    },
    {
    name: 'Delivery Information',
    link: '/delivery'
    },
    {
    name: 'Privacy Policy',
    link: '/privacy-policy'
    }
]
const supportLinks = [
    {
    name: 'Terms & conditions',
    link: '/terms'
    },
    {
    name: 'Our policy',
    link: '/policy'
    },
    {
    name: 'Visit our forum',
    link: '/forum'
    },
    {
    name: 'Mail Us',
    link: '/mail'
    },
    {
    name: 'F.A.Qs',
    link: '/support'
    }
]



type Props = {};
const FooterContent = (props: Props) => {

    return (
        <StyledFooterContent container>
            <Grid item md={3} sm={4}>
                <FooterList title='services' links={servicesLinks}/>
            </Grid>
            <Grid item md={3} sm={4}>
                <FooterList title='information' links={informationLinks}/>
            </Grid>
            <Grid item md={3} sm={4}>
                <FooterList title='support' links={supportLinks}/>
            </Grid>
            <Grid item md={3} sm={12}>
                <FooterInfo/>
            </Grid>
        </StyledFooterContent>
    );
};
export default React.memo(FooterContent);

const StyledFooterContent = styled(Grid)`
  @media (max-width: 600px){
    justify-content: center;
  }
`