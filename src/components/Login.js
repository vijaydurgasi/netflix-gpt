import React, { useRef, useState, useEffect } from "react";
import netflix from "../assets/netflix.jpg";
import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Login = () => {
    const navigate = useNavigate();
    const user = useSelector((store) => store.user);

    const [errorMessages, setErrorMessages] = useState({
        email: null,
        password: null,
        name: null,
    });

    const [signUpForm, setIsSignUpForm] = useState(false);

    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    useEffect(() => {
        if (user) {
            navigate("/browse");
        }
    }, [user, navigate]);

    const handleClick = async (e) => {
        e.preventDefault();

        const nameValue = name.current?.value;
        const emailValue = email.current?.value;
        const passwordValue = password.current?.value;

        const errors = checkValidData(emailValue, passwordValue, nameValue);
        setErrorMessages(errors);

        if (errors.email || errors.password || errors.name) return;

        try {
            if (signUpForm) {
                const userCredential = await createUserWithEmailAndPassword(
                    auth,
                    emailValue,
                    passwordValue
                );

                await updateProfile(userCredential.user, {
                    displayName: nameValue,
                });
            } else {
                await signInWithEmailAndPassword(
                    auth,
                    emailValue,
                    passwordValue
                );
            }

            navigate("/browse");
        } catch (error) {
            setErrorMessages((prev) => ({
                ...prev,
                email: "Invalid email or password.",
            }));
        }
    };

    return (
        <div className="relative h-screen w-full text-white">
            <div className="absolute inset-0 -z-10">
                <img
                    src={netflix}
                    alt="background"
                    className="w-full h-full object-cover brightness-110"
                />
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <h1 className="text-[#E50914] text-3xl font-extrabold ">
                NETFLIX
            </h1>

            <div className="flex justify-center items-center h-full">
                <div className="bg-black/75 p-12 rounded-md w-full max-w-md">
                    <h1 className="text-3xl font-bold mb-8">
                        {signUpForm ? "Sign Up" : "Sign In"}
                    </h1>

                    <form className="flex flex-col gap-4">
                        {signUpForm && (
                            <input
                                ref={name}
                                type="text"
                                placeholder="Name"
                                className="p-4 bg-gray-700 rounded-md"
                            />
                        )}

                        <input
                            ref={email}
                            type="text"
                            placeholder="Email"
                            className="p-4 bg-gray-700 rounded-md"
                        />

                        <input
                            ref={password}
                            type="password"
                            placeholder="Password"
                            className="p-4 bg-gray-700 rounded-md"
                        />

                        {errorMessages.email && (
                            <p className="text-red-500">{errorMessages.email}</p>
                        )}

                        <button
                            onClick={handleClick}
                            className="bg-red-600 hover:bg-red-700 p-3 rounded-md mt-4"
                        >
                            {signUpForm ? "Sign Up" : "Sign In"}
                        </button>

                        <div className="text-gray-400 text-sm mt-6">
                            {signUpForm ? "Already a user?" : "New to Netflix?"}
                            <span
                                onClick={() => setIsSignUpForm(!signUpForm)}
                                className="text-white cursor-pointer ml-1"
                            >
                                {signUpForm ? "Sign In" : "Sign Up"}
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
