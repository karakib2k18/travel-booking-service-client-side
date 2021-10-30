import React from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import { LockClosedIcon } from '@heroicons/react/solid'
import swal from 'sweetalert';
import UseAuth from '../../../Hooks/UseAuth';

const SignUp = () => {
    // const [name, setName] = useState('');
    // const [error, setError] = useState('');
    const { handleSignInWithGoogle, handleCreateUserWithEmailPassword } = UseAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();
    const history = useHistory();
    const location = useLocation();
    const redirect_url = location?.state?.from || "/home";
    // console.log(redirect_url)
    const onSubmit = data => {
        handleCreateUserWithEmailPassword(data.email, data.password)
            .then((result) => {
                history.push(redirect_url)
                // console.log('login succesfull')
                swal("Good job!", "You have created a new account!", "success", {
                    button: false,
                    timer: 1300
                })
            })
            .catch((error) => {
                // console.log(error.message);
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                }
                );
            })
    };

    const loginFinalWithGmail = () => {
        handleSignInWithGoogle()
            .then((result) => {
                // console.log(result.user)
                history.push(redirect_url)
                // console.log('login succesfull')
            })
            .catch((error) => {
                // console.log(error.message);
                swal({
                    icon: 'error',
                    title: 'Oops...',
                    text: error.message,
                }
                );
            })
    };




    return (
        <div>
            <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 lg:w-2/6 mx-auto">
                <div className="max-w-md w-full space-y-8">
                    <div>
 
                        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">SignUp to your account</h2>

                    </div>
                    <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
                        <input type="hidden" name="remember" defaultValue="true" />
                        <div className="rounded-md shadow-sm -space-y-px">
                            <div>
                                <label htmlFor="email-address" className="sr-only">
                                    Email address
                                </label>
                                <input
                                    id="email-address"
                                    name="email"
                                    type="email"

                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    {...register("email", { required: true })}
                                    placeholder="Email address"

                                />
                                {errors.email && <span className="text-red-500 text-sm italic">Email is required </span>}
                            </div>
                            <div>
                                <label htmlFor="password" className="sr-only">
                                    Password
                                </label>
                                <input
                                    id="password"
                                    name="password"
                                    type="password"

                                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    {...register("password", { required: true })}
                                    placeholder="Password"
                                />
                                {errors.password && <span className="text-red-500 text-sm italic">Password is required </span>}
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <Link to="/login" className="ml-2 block text-sm text-indigo-600 hover:text-indigo-500">
                                    Already have an Account?
                                </Link>
                            </div>

                            {/* <div className="text-sm">
                                <button onClick={handleResetPassword} className="font-medium text-indigo-600 hover:text-indigo-500">
                                    Forgot your password?
                                </button>
                            </div> */}
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="group relative w-full flex justify-center mb-0 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                                    <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
                                </span>
                                Sign Up
                            </button>

                        </div>
                    </form>
                    <button
                        onClick={loginFinalWithGmail}
                        className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-purple-600 hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500"
                    >
                        {/* <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                            <LockClosedIcon className="h-5 w-5 text-purple-500 group-hover:text-purple-400" aria-hidden="true" />
                        </span> */}
                        Login With Google
                    </button>

                </div>
            </div>
        </div>

    );
};

export default SignUp;