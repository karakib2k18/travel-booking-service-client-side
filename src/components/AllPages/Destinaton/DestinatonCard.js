import React from 'react';
import { Link } from 'react-router-dom';

const DestinatonCard = ({tour}) => {
    return (
        <div>
               <Link  to='/destination' className="group">
                <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                  <img
                    src={tour.img}
                    alt="Img not found"
                    className="w-full h-full object-center object-cover group-hover:opacity-75 transform transition duration-700 hover:scale-125"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700 font-black">{tour.destinationcountry}</h3>
              </Link>
        </div>
    );
};

export default DestinatonCard;