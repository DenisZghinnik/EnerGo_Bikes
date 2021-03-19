import React from 'react';
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import TopAccessories from "./TopAccessories/TopAccessories";
import BestBikes from "./BestBikes/BestBikes";
import ShopByCategory from "./ShopByCategory/ShopByCategory";
import NewArrivals from "./NewArrivals/NewArrivals";
import Partners from "./Partners/Partners";
import Subscribe from "./Subscribe/Subscribe";

type Props = {};
const Home = (props: Props) => {

    return (
        <div>
            <HeaderSlider/>
            <TopAccessories/>
            <BestBikes/>
            <ShopByCategory/>
            <NewArrivals/>
            <Partners/>
            <Subscribe/>
        </div>
    );
};
export default React.memo(Home);