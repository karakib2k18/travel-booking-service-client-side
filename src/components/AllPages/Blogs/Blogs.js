import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard/BlogCard';

const Blogs = () => {
    const [blogslist, setBlogslist] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        fetch('https://ghastly-monster-29562.herokuapp.com/tour_blog')
            .then(response => response.json())
            .then(json => {
                setBlogslist(json);
                setIsLoading(false);
            })
    }, []);
    return (
        <div>
            <h1 className="mt-3 mb-3 text-4xl font-bold text-center pt-3 text-gray-900">All Blogs</h1>
            <div className="max-w-screen-xl mx-auto ">
                {isLoading && (
                    <div>  <div className=" flex justify-center items-center"> <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
                    </div></div>
                )}
                <div className="  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-8 ">
                    {blogslist.map(blog => (
                        <BlogCard blog={blog} key={blog._id}></BlogCard>
                    ))}
                </div>

            </div>
        </div>
    );
};
export default Blogs;