import React from 'react';
import BusinessSummery from './BusinessSummery';
import HomeBanner from './HomeBanner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <BusinessSummery></BusinessSummery>
        </div>
    );
};

export default Home;