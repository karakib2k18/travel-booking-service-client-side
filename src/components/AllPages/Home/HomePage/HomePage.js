import React from 'react';
import Contact from '../../Contact/Contact';
import Banner from '../Banner/Banner';
import TopDestination from '../TopDestination/TopDestination';
import TrendingTour from '../TrendingTour/TrendingTour';

const HomePage = () => {
    return (
        <div>
            <Banner></Banner>
            <TrendingTour></TrendingTour>
            <TopDestination></TopDestination>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;