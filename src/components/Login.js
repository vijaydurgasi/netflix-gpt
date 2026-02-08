import React, { useState } from 'react'
import Header from './Header'
import netflix from "../assets/netflix.jpg"

const Login = () => {

    const [signUpForm, setIsSingUPForm] = useState(false);

    const toggleSignUpForm = () => {
        setIsSingUPForm(!signUpForm);
    }
    return (
        <div className="relative h-screen w-full text-white">

            <div className="absolute inset-0 -z-10">
                <img
                    src={netflix}
                    alt="background"
                    className="w-full h-full object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            <Header />

            <div className="flex justify-center items-center h-full">
                <div className="bg-black/75 p-12 rounded-md w-full max-w-md">

                    <h1 className="text-3xl font-bold mb-8">{signUpForm ? "sign Up" : "sign In"}</h1>

                    <form className="flex flex-col gap-4">

                        {signUpForm && <input
                            type="text"
                            placeholder="Name"
                            className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        />}

                        <input
                            type="text"
                            placeholder="Email or phone number"
                            className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="p-4 bg-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-red-600"
                        />

                        <button
                            type="submit"
                            className="bg-red-600 hover:bg-red-700 transition duration-200 p-3 rounded-md font-semibold mt-4"
                        >
                            {signUpForm ? "sign Up" : "sign In"}
                        </button>

                        <p className="text-gray-400 text-sm mt-4 text-center hover:underline cursor-pointer">
                            Forgot password?
                        </p>

                        <div className="text-gray-400 text-sm mt-6">
                            {signUpForm ? "Already a user sign In" : "New to Netflix sign Up"} {""}
                            <span onClick={toggleSignUpForm} className="text-white hover:underline cursor-pointer">
                                {signUpForm ? "sign In" : "sign Up"}
                            </span>
                        </div>

                    </form>
                </div>
            </div>

        </div>
    )
}

export default Login

