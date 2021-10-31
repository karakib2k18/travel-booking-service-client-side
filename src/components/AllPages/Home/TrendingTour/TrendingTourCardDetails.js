import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { useForm } from "react-hook-form";
import swal from "sweetalert";
import UseAuth from "../../../../Hooks/UseAuth";

const TrendingTourCardDetails = () => {
  const { user } = UseAuth();
  // console.log(user);
  const { tourId } = useParams();
  const [singleTour, setSingleTour] = useState({});
  useEffect(() => {
    fetch("https://ghastly-monster-29562.herokuapp.com/tourist_place")
      .then((res) => res.json())
      .then((data) => {
        setSingleTour(data);
        // eslint-disable-next-line eqeqeq
        const singleTourId = data.find((fd) => fd._id == tourId);
        setSingleTour(singleTourId);
      });
  }, [tourId]);
  const {
    title,
    destinationcountry,
    price,
    days,
    location,
    groupsize,
    img,
    description,
  } = singleTour;

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    data.userphotoURL = user.photoURL;
    data.status = 'Pending';
    console.log(data)
      swal({
        title: "Do you want Place Order?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
        fetch("https://ghastly-monster-29562.herokuapp.com/booking",{
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        })
          .then((resp) => resp.json())
          .then((res) => {
           if(res.insertedId){

              swal("You have Successfully Booked A Place!", "Well Done!", {
                icon: "success",
                timer: 1400
              });
              reset();
            }
          });
          }
      });

  };

  return (
    <>
      <div className="mx-auto p-5 my-20 bg-white rounded-xl shadow-xl overflow-hidden lg:w-10/12 ">
        <div className="md:flex">
          <div className="ld:p-8 md:p-8 lg:w-8/12">
            <div className="md:flex-shrink-0">
              <img
                className="h-48 w-full object-cover md:h-80 md:w-full"
                src={img}
                alt="img is loading"
              />
            </div>
            <div className="uppercase tracking-wide  text-indigo-600 font-semibold text-xl lg:text-3xl mt-8">
              Title: {title}
            </div>
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
              Group Size: {groupsize}
            </p>
            <p className="mt-2 text-xl lg:text-l text-gray-800">
              Description: {description}
            </p>
            <p className="mt-2 text-xl lg:text-xl text-gray-800">
              Location:{" "}
              <span className="text-xl poppins  mb-2  bg-opacity-100 inline-block px-2 py-2 font-semibold text-purple-900 rounded-full border-2 border-purple-500 hover:from-purple-500 hover:to-purple-700 lg:px-8">
                {location}
              </span>
            </p>

          </div>
          <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:w-4/12 mx-auto">
            <div className="max-w-md w-full space-y-8">
              <div>
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                  BOOK NOW
                </h2>
              </div>
              <form
                className="mt-8 space-y-6"
                onSubmit={handleSubmit(onSubmit)}
              >
                <input type="hidden" name="remember" defaultValue="true" />

                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="name-tour" className="sr-only">
                      name
                    </label>
                    <input
                      id="name-tour"
                      name="name"
                      type="text"
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      defaultValue={user.displayName}
                      {...register("name")}
                      placeholder="Full Name"
                    />
                    {errors.name && (
                      <span className="text-red-500 text-sm italic">
                        name is required{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="email-address" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email-address"
                      name="email"
                      type="email"
                      defaultValue={user.email}
                      className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                      {...register("email", { required: true })}
                      placeholder="Email address"
                      required
                    />
                    {errors.email && (
                      <span className="text-red-500 text-sm italic">
                        Email is required{" "}
                      </span>
                    )}
                  </div>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="title-tour" className="sr-only">
                      Title
                    </label>
                    {title && (
                      <input
                        id="title-tour"
                        name="title"
                        type="text"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        defaultValue={title}
                        {...register("title")}
                        placeholder="Tour Title"
                        required
                      />
                    )}
                  </div>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="country-destination" className="sr-only">
                      Country-Destination
                    </label>
                    {destinationcountry && (
                      <input
                        id="country-destination"
                        name="country-destination"
                        type="text"
                        defaultValue={destinationcountry}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        {...register("countrydestination")}
                        placeholder="Country-Destination"
                        required
                      />
                    )}
                  </div>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="price" className="sr-only">
                      price
                    </label>
                    {price && (
                      <input
                        id="price"
                        name="price"
                        type="number"
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        {...register("price")}
                        defaultValue={price}
                        placeholder="Price"
                        required
                      />
                    )}
                  </div>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="location" className="sr-only">
                      location
                    </label>
                    {location && (
                      <input
                        id="location"
                        name="location"
                        type="text"
                        defaultValue={location}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        {...register("location")}
                        placeholder="Place location"
                        required
                      />
                    )}
                  </div>
                </div>
                <div className="rounded-md shadow-sm -space-y-px">
                  <div>
                    <label htmlFor="group-size" className="sr-only">
                      group-size
                    </label>
                    {groupsize && (
                      <input
                        id="group-size"
                        name="group-size"
                        type="number"
                        defaultValue={groupsize}
                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                        {...register("groupsize")}
                        placeholder="Group Size"
                        required
                      />
                    )}
                  </div>
                </div>

                <div>
                  <button
                    type="submit"
                    className="group relative w-full flex justify-center mb-0 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TrendingTourCardDetails;
