import React from 'react';
import Banner from '../Banner/Banner';
import TopDestination from '../TopDestination/TopDestination';
import TrendingTour from '../TrendingTour/TrendingTour';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <TopDestination></TopDestination>
            <TrendingTour></TrendingTour>
        </div>
    );
};

export default HomePage;