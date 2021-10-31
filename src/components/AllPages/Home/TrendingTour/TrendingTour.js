import React, { useEffect, useState } from 'react';
import TrendingTourCard from './TrendingTourCard';

const TrendingTour = () => {
    const [tourlist, setTourlist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://ghastly-monster-29562.herokuapp.com/tourist_place')
            .then(response => response.json())
            .then(json => {
                setTourlist(json);
                setIsLoading(false);
            })
    }, []);
    return (
        <div>
            <h1 className="mt-6 mb-3 text-4xl font-bold text-center pt-3 text-gray-900">Trending Tours Package</h1>
            <div className="max-w-screen-xl mx-auto ">
                {isLoading && (
                    <div>  <div className=" flex justify-center items-center"> <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                    </div></div>
                )}
                <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 ">
                    {tourlist.map(tour => (
                        // <TrendingTourCard tour={tour} key={tour._id}></TrendingTourCard>
                        <TrendingTourCard tour={tour} key={tour._id}></TrendingTourCard>
                    ))}

                </div>

            </div>
        </div>
    );
};
export default TrendingTour;