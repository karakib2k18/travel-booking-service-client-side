import React from 'react';

const Contact = () => {
    return (
        <div>
                      <div className="flex justify-center lg:-mt-64 items-center w-screen h-screen bg-white">
                <div className="container mx-auto  px-4 lg:px-20">

                    <div className="w-full p-8 my-4  mr-auto rounded-2xl shadow-xl lg:-mb-52">
                        <div className="flex">
                            <h1 className="font-bold uppercase text-3xl">Send us a message</h1>
                        </div>
                        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 mt-5">
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="First Name*" />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="text" placeholder="Last Name*" />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="email" placeholder="Email*" />
                            <input className="w-full bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                                type="number" placeholder="Phone*" />
                        </div>
                        <div className="my-4">
                            <textarea placeholder="Message*" className="w-full h-32 bg-gray-100 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                        </div>
                        <div className="my-2 w-1/2 lg:w-1/4">
                            <button className="uppercase text-sm font-bold tracking-wide  p-3 rounded-lg w-full text-white bg-gradient-to-br from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-700 lg:px-2 focus:outline-none focus:shadow-outline">
                                Send Message
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;