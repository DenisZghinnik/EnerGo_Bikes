import React from 'react';
import HeaderSlider from "./HeaderSlider/HeaderSlider";

type Props = {};
const Home = (props: Props) => {

    return (
        <div>
            <HeaderSlider/>
        </div>
    );
};
export default React.memo(Home);