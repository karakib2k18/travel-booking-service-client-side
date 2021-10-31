import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useForm } from "react-hook-form";
import UseAuth from "../../../Hooks/UseAuth";

const AllOrders = () => {
  const { user } = UseAuth();
  const [allBookings, setAllBookings] = useState([]);
  const [updateForm, setupdateForm] = useState(false);
  const [userUpdate, setUserUpdate] = useState({});

  const { register, handleSubmit, reset } = useForm();

  const handleEditButton = (id) =>{
    fetch(`https://ghastly-monster-29562.herokuapp.com/booking/${id}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setUserUpdate(data);
    });
  }

  const onSubmit = (data) => {
    // console.log(data.status);
    let updateStatus;
    updateStatus = {...userUpdate}
    updateStatus.status = data.status;
    setUserUpdate(updateStatus);
    console.log(updateStatus);
    const url = `https://ghastly-monster-29562.herokuapp.com/booking/${data._id}`;
    fetch(url, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(userUpdate)
    })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                alert('Update Successful');
                setUserUpdate({});
                reset();
            }
        })

    setupdateForm(false);
  };

  useEffect(() => {
    fetch("https://ghastly-monster-29562.herokuapp.com/booking")
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
      if (willDelete) {
        fetch(`https://ghastly-monster-29562.herokuapp.com/booking/${id}`, {
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
              swal("You have Successfully Cancel Booking!", "Well Done!", {
                icon: "success",
                timer: 1200,
              });
            }
          });
      }
    });
  };

  return (
    <div>
      <h1 className="mt-3 mb-3 text-4xl font-bold text-center pt-3 text-gray-900">
        All Booking List
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
                    <tr key={allBooking?._id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10">
                            <img
                              className="h-10 w-10 rounded-full"
                              src={allBooking?.userphotoURL}
                              alt=""
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {allBooking?.name}
                            </div>
                            <div className="text-sm text-gray-500">
                              {allBooking?.email}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {allBooking?.title}
                        </div>
                        {/* <div className="text-sm text-gray-500">
                          {allBooking.department}
                        </div> */}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        {!updateForm && (
                          <span className="py-2 px-3 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-400 text-grey-900">
                            {allBooking?.status} 
                          </span>
                        )}
                        {updateForm && (
                          <div>
                            <form onSubmit={
                              handleSubmit(onSubmit)
                            }>
                              <input {...register("firstName")} />
                              <select {...register("status")}>

                                <option value="Approved">Approved</option>
                                <option value="Pending">Pending</option>
                              </select>
                              <button
                                type="submit"
                                className="bg-purple-700 text-white mt-2  font-bold py-2 px-4 rounded"
                              >
                                Update
                              </button>
                            </form>
                          </div>
                        )}
                      </td>
                      {/* <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{allBooking.role}</td> */}
                      <td className="px-6 space-x-2 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => {
                            handleEditButton(allBooking?._id)
                            setupdateForm(true)

                          }}
                          className="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded"
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => handleDeleteButton(allBooking?._id)}
                          className=" mt-2 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
                        >
                          Cancel
                        </button>
                      </td>
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

export default AllOrders;
