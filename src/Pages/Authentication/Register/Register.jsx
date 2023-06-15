import { useForm } from 'react-hook-form';
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUserCircle, HiOutlinePhotograph, HiOutlinePhone } from 'react-icons/hi';
import { TbAddressBookOff, TbGenderAgender } from "react-icons/tb";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import AuthenticationButton from '../../../components/AuthenticationButton/AuthenticationButton';
import Swal from 'sweetalert2';
import GoogleButton from '../../../components/GoogleButton/GoogleButton';
import useAuth from '../../../CustomHooks/useAuth';
import axios from 'axios';
import { AiOutlineLoading } from "react-icons/ai";


const Register = () => {
    const { createUser, updateUserProfile, loading, setLoading } = useAuth()

    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const { register, handleSubmit, watch, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        createUser(data?.email, data?.password)
            .then((result) => {
                // Creating User 
                const user = result.user;
                if (user) {
                    updateUserProfile(data?.name, data?.photoUrl)
                        // update user profile
                        .then(() => {
                            axios.post('http://localhost:5000/users', { name: data?.name, email: data?.email, photo: data?.photoUrl, role: data?.role })
                                .then(res => {
                                    console.log(res);
                                    Swal.fire({
                                        position: 'center',
                                        icon: 'success',
                                        title: 'Welcome to the TalkWorld',
                                        showConfirmButton: false,
                                        timer: 2000
                                    })
                                    navigate(from, { replace: true })
                                }).catch(error => {
                                    setLoading(false)
                                    console.log(error);
                                })
                        }).catch(error => console.log(error))
                }
            })
            .catch((error) => {
                setLoading(false)
                const errorMessage = error.message;
                console.log(errorMessage);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `<a href="">${errorMessage}</a>`

                })
            });
        reset()
    };

    return (
        <div className="fullcontent grid lg:grid-cols-2 gap-5 font-sans">
            <div className="headings">
                <h1>Create an Account - TalkWorld</h1>
                <h2>
                    Register now to embark on your journey in our foreign language course. Gain full access to our educational resources, including interactive lessons, practical exercises, and exchanges with fellow learners. Become part of a global community of language enthusiasts.
                </h2>
            </div>


            <div className="formbox">
                <h3 className='font-bold'>Registration</h3>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <input
                        type="hidden"
                        {...register('role')}
                        defaultValue="student"
                        readOnly
                        className="input w-full max-w-xs asd pl-10 mt-1"
                    />
                    <div className='grid lg:grid-cols-2 gap-2'>
                        <div className="flex flex-col">
                            <label className="font-bold">Name</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <HiOutlineUserCircle className="h-5 w-5 text-gray-400"></HiOutlineUserCircle>
                                </span>
                                <input
                                    type="text"
                                    {...register('name', { required: true })}
                                    className="input w-full max-w-xs asd pl-10 mt-1"
                                />
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Photo URL</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <HiOutlinePhotograph className="h-5 w-5 text-gray-400"></HiOutlinePhotograph>
                                </span>
                                <input
                                    type="url"
                                    {...register('photoUrl', { required: true })}
                                    className="input w-full max-w-xs asd pl-10 mt-1"
                                />
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Gender</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <TbGenderAgender className="h-5 w-5 text-gray-400"></TbGenderAgender>
                                </span>
                                <select
                                    {...register('gender')}
                                    className="select select-bordered w-full max-w-xs bg-gray-700 asd pl-10 mt-1"
                                >
                                    <option className='bg-slate-950' value="">Select</option>
                                    <option className='bg-slate-950' value="male">Male</option>
                                    <option className='bg-slate-950' value="female">Female</option>
                                    <option className='bg-slate-950' value="other">Other</option>
                                </select>
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Phone Number</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <HiOutlinePhone className="h-5 w-5 text-gray-400"></HiOutlinePhone>
                                </span>
                                <input type="number"
                                    {...register('phoneNumber', { required: true })}
                                    className="input w-full max-w-xs asd pl-10 mt-1"
                                />
                            </div>

                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Address</label>
                            <div className="relative">
                                <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
                                    <TbAddressBookOff className="h-5 w-5 text-gray-400"></TbAddressBookOff>
                                </span>
                                <input type="text"
                                    {...register('address', { required: true })}
                                    className="input w-full max-w-xs asd pl-10 mt-1"
                                />
                            </div>

                        </div>
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
                                    type="password"
                                    {...register('password', {
                                        required: true,
                                        minLength: 6,
                                        pattern: /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[!@#$%^&*]).{6,}$/,

                                    })}
                                    className="input w-full max-w-xs asd pl-10 mt-1"
                                />
                            </div>
                            {errors.password?.type === 'required' && (
                                <p className="text-red-500 mt-1">Password is required.</p>
                            )}
                            {errors.password?.type === 'minLength' && (
                                <p className="text-red-500 mt-1">Password must be at least 6 characters long.</p>
                            )}
                            {errors.password?.type === 'pattern' && (
                                <p className="text-red-500 mt-1">
                                    Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character.
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col">
                            <label className="font-bold">Confirm Password</label>
                            <input
                                type="password"
                                {...register('confirmPassword', {
                                    required: true,
                                    validate: (value) => value === watch('password'),
                                })}
                                className="input w-full max-w-xs asd mt-1"
                            />
                            {errors.confirmPassword?.type === 'required' && (
                                <p className="text-red-500 mt-1">Confirm Password is required.</p>
                            )}
                            {errors.confirmPassword?.type === 'validate' && (
                                <p className="text-red-500 mt-1">Passwords must match.</p>
                            )}
                        </div>
                    </div>
                    <AuthenticationButton text="Submit"
                    >
                        {loading ? (
                            <AiOutlineLoading className='m-auto animate-spin' size={24} />
                        ) : (
                            'Continue'
                        )}
                    </AuthenticationButton>
                </form>
                <p className="divider border-t">or</p>
                <GoogleButton text="Register"></GoogleButton>
                <p className="my-3 ">Allready Have an Account?</p>
                <Link to="/login"><AuthenticationButton text="Log In"></AuthenticationButton></Link>
            </div>
        </div>
    );



};

export default Register;