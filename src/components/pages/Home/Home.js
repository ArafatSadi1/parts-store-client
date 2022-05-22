import React from 'react';
import Review from '../Review/Review';
import Footer from '../shared/Footer';
import BusinessSummery from './BusinessSummery';
import HomeBanner from './HomeBanner';
import Products from './Products/Products';

const Home = () => {
    return (
        <div>
            <HomeBanner></HomeBanner>
            <Products></Products>
            <BusinessSummery></BusinessSummery>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;