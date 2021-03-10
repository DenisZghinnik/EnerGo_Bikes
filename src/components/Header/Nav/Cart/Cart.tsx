import React from 'react';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import styled from "styled-components";
import {navStyle} from "../../../../css vars/navStyles";
import {Badge, Drawer} from "@material-ui/core";
import {greyHover} from "../../../../css vars/colors";
import CartDrawerContent from "./CartDrawerContent";
import itemImg1 from '../../../../img/products/pro25_small.jpg'
import itemImg2 from '../../../../img/products/pro36_small.jpg'
import itemImg3 from '../../../../img/products/pro37_small.jpg'
import itemImg4 from '../../../../img/products/pro5_small.jpg'

const itemsArray = [
        {
        img: itemImg1,
        id: 1,
        link: '/products/lool',
        name: 'Super Duper Extreme Bicycle',
        quantity: 1,
        price: 543},
        {
        img: itemImg2,
        id: 2,
        link: '/products/extremeBicycle',
        name: 'Super Duper Extreme Bicycle',
        quantity: 2,
        price: 123},
        {
        img: itemImg3,
        id: 3,
        link: '/products/fajnyRower',
        name: 'Fajny Rower',
        quantity: 1,
        price: 612},
        {
        img: itemImg4,
        id: 4,
        link: '/products/trans',
        name: 'Kross Trans 1.0',
        quantity: 1,
        price: 1243}];

const Cart = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {setOpen(true)}
    const handleClose = () => {setOpen(false)}

    const [items, setItems] = React.useState(itemsArray);
    const removeItemFromCart = (id:number) => {setItems(items.filter(a=>a.id!==id))};
    const totalCount = items.length;

    return (
        <>
            <StyledBadge onClick={handleOpen} showZero={false} badgeContent={totalCount}>
                <StyledCartIcon/>
            </StyledBadge>

            <Drawer anchor='right' open={open} onClose={handleClose}>
                <CartDrawerContent items={items} remove={removeItemFromCart} totalCount={totalCount} handleClose={handleClose}/>
            </Drawer>
        </>
    );
};
export default React.memo(Cart);
const StyledBadge = styled(Badge)`&&{
  margin-top: 3px;
  margin-left: 20px;
  vertical-align: top;
  .MuiBadge-badge{
    background-color: ${greyHover};
    color: #fff;
  }
}`
const StyledCartIcon = styled(ShoppingCartIcon)`&&{
  ${navStyle};
  font-size: 34px;
}`