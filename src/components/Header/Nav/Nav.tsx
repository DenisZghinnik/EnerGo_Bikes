import React from 'react';
import Search from "./Search/Search";
import Login from "./Login/Login";
import Cart from "./Cart/Cart";

type Props = {};

const Nav = (props: Props) => {

    return (
        <div>
            <Search/>
            <Login/>
            <Cart/>
        </div>
    );
};
export default Nav;