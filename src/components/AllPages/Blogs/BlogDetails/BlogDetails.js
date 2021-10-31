import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';

const BlogDetails = () => {
    const { blogsId } = useParams();
    const [singleBlogs, setSingleBlogs] = useState({});
    useEffect(() => {
        fetch('https://ghastly-monster-29562.herokuapp.com/tour_blog')
            .then(res => res.json())
            .then(data => {
                setSingleBlogs(data)
                // eslint-disable-next-line eqeqeq
                const singleDoctorDetails = data.find(fd => fd._id == blogsId);
                setSingleBlogs(singleDoctorDetails);
            });

    }, [blogsId])
    const {  img, title, description , country } = singleBlogs;
    return (
        <>
            <div className="mx-auto lg:p-5 my-20 bg-white rounded-xl shadow-xl overflow-hidden w-11/12 lg:w-5/6 ">
            <div className="md:flex-shrink-0">
                        <img className="transform transition duration-700 hover:scale-110  h-full w-full object-cover md:h-80 " src={img} alt="img is loading" />
                    </div>
                <div className="md:flex">
                    <div className="py-8 px-3">
                        <div className="uppercase tracking-wide  text-gray-900 font-semibold lg:text-2xl">{country}</div>
                        <div className="uppercase tracking-wide  text-gray-900 font-semibold lg:text-2xl">Title: {title}</div>
                        <p className="mt-2 text-xl text-gray-800">Description : {description }</p>
                        <Link to='/tour'><button className="inline-block px-2 py-2 font-semibold text-white rounded-lg bg-gradient-to-br from-indigo-600 to-indigo-700 hover:from-indigo-500 hover:to-indigo-700  lg:px-8 mt-3" type="submit">
                            See Our Tour Package
                        </button></Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogDetails;