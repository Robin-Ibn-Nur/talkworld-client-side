import { HiOutlineEye, HiOutlineEyeOff, HiOutlineLockClosed, HiOutlineMail } from "react-icons/hi";
import { useForm } from 'react-hook-form';
import "./Login.css"
import AuthenticationButton from "../../../components/AuthenticationButton/AuthenticationButton";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../../CustomHooks/useAuth";
import Swal from "sweetalert2";
import GoogleButton from "../../../components/GoogleButton/GoogleButton";
import { useState } from "react";



const LogIn = () => {
    const { signIn } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit, reset, formState: { errors }, } = useForm();

    const [showPassword, setShowPassword] = useState(false);
    
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const onSubmit = (data) => {
        
        signIn( data?.email, data?.password)
            .then((result) => {
                const user = result.user;
                navigate(from, { replace: true })
                if (user) {
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: "Welcome to the TalkWorld",
                        showConfirmButton: false,
                        timer: 2000
                    })
                }
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
        reset()
    };


    return (
        <div className="fullcontent grid lg:grid-cols-2 gap-5 font-sans">
            <div className="headings">
                <h1>Access Your Account - TalkWorld</h1>
                <h2>
                    Log in to your account to access the foreign language course. Enjoy an interactive and engaging learning experience where you can practice the language, track your progress, and access exclusive content. Join our language community now
                </h2>
            </div>
            <div className="formbox ">
                <h3 className="font-bold">Log In</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="flex flex-col">
                        <label className="font-bold">Email</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <HiOutlineMail className="h-5 w-5 text-gray-400"></HiOutlineMail>
                            </span>
                            <input
                                type="email"
                                {...register('email', { required: true })}
                                className="input w-full max-w-xs asd pl-10 mt-1"
                            />
                        </div>
                        {errors.email && <p className="text-red-500 mt-1">Email is required.</p>}
                    </div>
                    <div className="flex flex-col">
                        <label className="font-bold">Password</label>
                        <div className="relative">
                            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                <HiOutlineLockClosed className="h-5 w-5 text-gray-400"></HiOutlineLockClosed>
                            </span>
                            <input
                                type={showPassword ? "text" : "password"}
                                {...register('password', {
                                    required: true,
                                })}
                                className="input w-full max-w-xs asd pl-10 mt-1"
                            />
                            <span
                                className="absolute inset-y-0 right-0 pr-8 flex items-center cursor-pointer"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ?
                                    <HiOutlineEye></HiOutlineEye>
                                    : <HiOutlineEyeOff></HiOutlineEyeOff>}

                            </span>
                        </div>
                    </div>
                    <AuthenticationButton text="Log In"></AuthenticationButton>
                </form>
                <p className="divider border-t">or</p>
                <GoogleButton text="Log In"></GoogleButton>
                <p className="my-3">New User?</p>
                <Link to="/register"><AuthenticationButton text="Register Now"></AuthenticationButton></Link>
            </div>
        </div>

    );
};

export default LogIn;