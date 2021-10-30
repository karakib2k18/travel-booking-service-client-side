import React from "react";
import { Link } from "react-router-dom";
const TrendingTourCard = ({ tour }) => {
    const {
        _id,
        title,
        destinationcountry,
        price,
        days,
        location,
        groupsize,
        img,
    } = tour;
    const url = `/tour/${_id}`;
    return (
        <div className="bg-white mx-3 hover:scale-105 px-10 pt-5 pb-8 border-4 border-light-blue-500 border-opacity-50 rounded-2xl hover:shadow-xl ">
            <p className="text-xl poppins  mb-2  bg-opacity-100 inline-block px-2 py-2 font-semibold text-purple-900 rounded-full border-2 border-purple-500 hover:from-purple-500 hover:to-purple-700 lg:px-8">
                {location}
            </p>
            {/* image  */}
            <div className="overflow-hidden rounded-2xl flex flex-grow ">
                <img
                    className="transform transition duration-700 hover:scale-125  lg:h-64 w-full object-cover md:h-64 "
                    src={img}
                    alt="img is loading"
                />
            </div>
            {/* other info  */}
            <div className="flex mt-6 space-x-3 justify-center ">
                <div className="flex flex-col space-y-3">
                    <h1 className="text-2xl font-semibold text-gray-900 poppins">
                        {title}
                    </h1>
                    <p className="text-xl font-medium text-gray-900 poppins">
                        Country: {destinationcountry}
                    </p>
                    <p className="text-xl font-medium text-gray-900 poppins">
                        Duration: {days} Days
                    </p>
                    <p className="text-xl font-medium text-gray-900 poppins">
                        Price: ${price}
                    </p>
                    <p className="text-xl font-medium text-gray-900 poppins">
                        Group Size: {groupsize} People
                    </p>
                    <div className="">
                        <Link to={url}>
                            <button
                                className="inline-block px-2  ml-8 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-700 lg:px-8"
                                type="submit"
                            >
                                Book Now
                            </button>
                        </Link>
                        {/* <Link to="/bookingtour">
                            <button
                                className="inline-block px-2 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700 lg:px-8"
                                type="submit"
                            >
                                Book Now
                            </button>
                        </Link> */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TrendingTourCard;
