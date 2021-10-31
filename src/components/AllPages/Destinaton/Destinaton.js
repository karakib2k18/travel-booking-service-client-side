import React, { useEffect, useState } from "react";
import DestinatonCard from "./DestinatonCard";


const Destinaton = () => {
  const [tourlist, setTourlist] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    fetch("https://ghastly-monster-29562.herokuapp.com/tourist_place")
      .then((response) => response.json())
      .then((json) => {
        setTourlist(json);
        setIsLoading(false);
      });
  }, []);

  return (
    <div>
       <h1 className="mt-10 mb-6 text-4xl font-bold text-center pt-3 text-gray-900">All Destination Place</h1>
      <div className="bg-white">
        <div className="max-w-2xl mx-auto py-4 px-4  sm:px-6 lg:max-w-7xl lg:px-8">

          <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {isLoading && (
                    <div>  <div className=" flex justify-center items-center"> <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                    </div></div>
                )}
            {tourlist.map(tour => (
           <DestinatonCard tour={tour} key={tour._id}></DestinatonCard>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinaton;
