import React from "react";
import { Link } from "react-router-dom";
import logo from "./../../../logo.png";
const Footer = () => {
  return (
    <>
      <footer className="px-6 mt-8 py-6 text-gray-600 bg-gray-50 lg:text-left text-center lg:px-8 md:py-12">
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto py-12 lg:px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 lg:text-4xl">
              <span className="block mb-4">Ready to Travel Today?</span>
              <span className="block text-purple-600">
                Discount 50%  only first tour.
              </span>
            </h2>
            <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
              <div className="mx-auto">
                <div className="inline-flex rounded-md shadow">
                  <Link
                    to="/tour"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700"
                  >
                    Get started
                  </Link>
                </div>
                <div className="ml-3 inline-flex rounded-md shadow">
                  <Link
                    to="/blogs"
                    className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-purple-600 bg-white hover:bg-purple-50"
                  >
                    Read Blogs
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid max-w-screen-xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-4 lg:gap-x-8">
          <div>
            <h5 className="text-xl font-semibold text-gray-900">About us</h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-lg  float-left font-normal hover:text-purple-900"
                  >
                    It's Turo, a tourism service base website. We provide best
                    service last fiv years. We have a lof of best and responsibe
                    tour guide. They always work hard to make you feel better.
                    So stand with us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="mx-auto">
            <h5 className="text-xl font-semibold text-gray-900">
              Countries We Offer
            </h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    Thailand
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    Vietnam
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    USA
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    UAE
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    Japan
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          {/* <div>
            <h5 className="text-xl font-semibold text-gray-900">
              Opening Hours
            </h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    {" "}
                    Mon-Tues: 6:00-10:00
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    {" "}
                    Wed-Thurs: 6:00-10:00
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    Sat-Sun: 6:00-10:00
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    Friday: Closed
                  </Link>
                </li>
                <li></li>
              </ul>
            </nav>
          </div> */}

          <div>
            <h5 className="text-xl font-semibold text-gray-900">
              Terms and conditions
            </h5>
            <nav className="mt-4">
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    Privacy and Cookie
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    Security & Statement
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="text-lg font-normal hover:text-purple-900"
                  >
                    Processor Agreement
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h5 className="text-xl font-semibold text-gray-900">
              {" "}
              Emergency Contact
            </h5>
            <div className="mt-4 space-y-4 md:space-y-6">
              <div className="lg:flex lg:items-start space-x-4">
                <div className="flex justify-center mb-">
                  <svg
                    className="w-6 h-6 mt-1  text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    ></path>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <address className="not-italic">
                    <p> Dubai, UAE</p>
                    <p>London,Uk</p>
                    <p>New York, USA</p>
                  </address>
                </div>
              </div>
              <div className="lg:flex lg:items-start space-x-4">
                <div className="flex justify-center mb-">
                  <svg
                    className="w-6 h-6 mt-1 text-gray-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    ></path>
                  </svg>
                </div>
                <div className="flex-1">
                  <Link to="/" className="hover:text-gray-500">
                    turo@gmail.com
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-between max-w-screen-xl mx-auto mt-5 space-y-4 md:flex-row">
          <img className="h-16" src={logo} alt="RAKIB TURO" />
          {/* <h4 className="mt-2">RAKIB TURO</h4> */}
          <div className="text-sm">
            ©2021 KAZI ABDUR RAKIB .All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
