import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div>
            <section className="header-banner h-96 w-full bg-yellow-50 bg-fixed">

                <div className="banner-opacity-add flex flex-col items-center justify-center h-full">
                    <h1 className="text-center text-3xl md:text-4xl lg:text-7xl poppins font-bold text-white text-bindigo-900">Search Vacation Spots & Places To Travel </h1>
                    <h1 className="text-center text-xl md:text-2xl lg:text-5xl pt-8 poppins font-bold text-white text-bindigo-900">Discover The World And Enjoy Your Life</h1>

                    <div className=" box-border mt-8 bg-white overflow-hidden focus:outline-none flex items-center">
                        <input type="text" className="  lg:px-4 focus:outline-none bg-transparent" placeholder="Search place here" />
                        <button className="text-sm bg-primary py-4 px-7  text-white  bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-700 lg:px-7">Search</button>
                        
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Banner;