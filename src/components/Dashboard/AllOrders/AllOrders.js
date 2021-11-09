import React, { useEffect, useState } from "react";
import UseAuth from "../../../Hooks/UseAuth";
import AllOrdersTable from "./AllOrdersTable";

const AllOrders = () => {
  const { user } = UseAuth();
  const [allBookings, setAllBookings] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch("https://ghastly-monster-29562.herokuapp.com/booking")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setAllBookings(data);
        setIsLoading(false);
      });
  }, [user.email, isLoading]);

  return (
    <div>
      <h1 className="mt-3 mb-3 text-4xl font-bold text-center pt-3 text-gray-900">
        All Booking List
      </h1>
      {isLoading && (
        <div>
          {" "}
          <div className=" flex justify-center items-center">
            {" "}
            <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-purple-500"></div>
          </div>
        </div>
      )}
      <div className="flex flex-col container mx-auto my-8">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Title
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Status
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3  text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Role
                    </th>
                    <th scope="col" className="relative px-6 py-3">
                      <span className="sr-only">Edit</span>
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {allBookings.map((allBooking) => (
                    <AllOrdersTable
                      allBooking={allBooking}
                      key={allBooking._id}
                    ></AllOrdersTable>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllOrders;
