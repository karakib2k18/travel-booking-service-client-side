import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import UseAuth from "../../../../Hooks/UseAuth";

const MyOrders = () => {
  const { user } = UseAuth();
  const [allBookings, setAllBookings] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/booking/${user.email}`)
      .then((res) => res.json())
      .then((data) => {
        setAllBookings(data);
      });
  }, [user.email]);

  const handleDeleteButton = (id) => {
    swal({
      title: "Do you want delete?",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      fetch(`http://localhost:5000/booking/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            const remaining = allBookings.filter(
              (booking) => booking._id !== id
            );
            setAllBookings(remaining);
            if (willDelete) {
              console.log(data);
              swal("You have Successfully Cancel Booking!", "Well Done!", {
                icon: "success",
                timer: 1200,
              });
            }
          }
        });
    });
  };

  // const {email,name,userphotoURL,status,title,department, _id} =allBookings
  return (
    <div>
      <h1 className="mt-3 mb-3 text-4xl font-bold text-center pt-3 text-gray-900">
        My Booking List
      </h1>
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
                    <tr key={allBooking._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={allBooking.userphotoURL}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {allBooking.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {allBooking.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {allBooking.title}
                        </div>
                        <div className="text-sm text-gray-500">
                          {allBooking.department}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="py-2 px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-grey-900">
                          {allBooking.status}
                        </span>
                        <span className="py-2 px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          Confirm
                        </span>
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{allBooking.role}</td> */}
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        {/* <Link href="#" className="text-indigo-600 hover:text-indigo-900">
                          Edit
                        </Link> */}
                      </td>
                      <button
                        onClick={() => handleDeleteButton(allBooking._id)}
                        className=" mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                      >
                        Cancel
                      </button>
                    </tr>
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

export default MyOrders;
