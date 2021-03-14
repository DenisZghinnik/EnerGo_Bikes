import React from 'react';
import HeaderSlider from "./HeaderSlider/HeaderSlider";
import TopAccessories from "./TopAccessories/TopAccessories";
import BestBikes from "./BestBikes/BestBikes";

type Props = {};
const Home = (props: Props) => {

    return (
        <div>
            <HeaderSlider/>
            <TopAccessories/>
            <BestBikes/>
        </div>
    );
};
export default React.memo(Home);