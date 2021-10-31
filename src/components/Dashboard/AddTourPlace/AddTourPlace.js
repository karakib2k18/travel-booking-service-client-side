import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import swal from "sweetalert";
// import UseAuth from '../../Hooks/UseAuth';

const AddTourPlace = () => {
  // const { user } = UseAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    console.log(data);
    swal({
      title: "Do you want to add a new place?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch("https://ghastly-monster-29562.herokuapp.com/tourist_place", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        })
          .then((resp) => resp.json())
          .then((res) => {
            if (res.insertedId) {
              console.log(data);
              swal("You have Added a New Place", "Well Done!", {
                icon: "success",
                timer: 1300,
              });
              reset();
              history.push("/home");
            }
          });
      }
    });
  };

  return (
    <div>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:w-2/6 mx-auto">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
              Add a New Tourist Place
            </h2>
          </div>
          <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="title-tour" className="sr-only">
                  Title
                </label>
                <input
                  id="title-tour"
                  name="title"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("title", { required: true })}
                  placeholder="Tour Title"
                />
                {errors.title && (
                  <span className="text-red-500 text-sm italic">
                    Title is required{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="image" className="sr-only">
                  image
                </label>

                <input
                  id="image"
                  name="img"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("img", { required: true })}
                  placeholder="Image-link"
                />
                {errors.img && (
                  <span className="text-red-500 text-sm italic">
                    This Field is required{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="country-destination" className="sr-only">
                  Country-Destination
                </label>
                <input
                  id="country-destination"
                  name="country-destination"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("countrydestination", { required: true })}
                  placeholder="Country-Destination"
                />
                {errors.countrydestination && (
                  <span className="text-red-500 text-sm italic">
                    Country-Destination is required{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="price" className="sr-only">
                  price
                </label>
                <input
                  id="price"
                  name="price"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("price", { required: true })}
                  placeholder="Price"
                />
                {errors.price && (
                  <span className="text-red-500 text-sm italic">
                    Price is required{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="location" className="sr-only">
                  location
                </label>
                <input
                  id="location"
                  name="location"
                  type="text"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("location", { required: true })}
                  placeholder="Place location"
                />
                {errors.location && (
                  <span className="text-red-500 text-sm italic">
                    Place location is required{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="group-size" className="sr-only">
                  group-size
                </label>
                <input
                  id="group-size"
                  name="group-size"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("groupsize", { required: true })}
                  placeholder="Group Size"
                />
                {errors.groupsize && (
                  <span className="text-red-500 text-sm italic">
                    Group Size is required{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="total-days" className="sr-only">
                  total-days
                </label>
                <input
                  id="total-days"
                  name="total-days"
                  type="number"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("days", { required: true })}
                  placeholder="Total-Days"
                />
                {errors.days && (
                  <span className="text-red-500 text-sm italic">
                    Group Size is required{" "}
                  </span>
                )}
              </div>
            </div>
            <div className="rounded-md shadow-sm -space-y-px">
              <div>
                <label htmlFor="place-details" className="sr-only">
                  place-details
                </label>
                <textarea
                  id="place-details"
                  name="place-details"
                  type="text"
                  cols="30"
                  rows="10"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  {...register("description", { required: true })}
                  placeholder="Place-details"
                />
                {errors.description && (
                  <span className="text-red-500 text-sm italic">
                    Place-details is required{" "}
                  </span>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center mb-0 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Add Place
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default AddTourPlace;
