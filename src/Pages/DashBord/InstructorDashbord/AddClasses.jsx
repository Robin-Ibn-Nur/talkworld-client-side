import { useForm } from "react-hook-form";
import useAuth from "../../../CustomHooks/useAuth";
import useAxiosSecure from "../../../CustomHooks/useAxiosSecure";
import axios from "axios";
import Swal from "sweetalert2";

const AddClasses = () => {
    const { user } = useAuth()
    const [axiosSecure] = useAxiosSecure()

    // using react hook form
    const { register, handleSubmit, reset } = useForm();

    // imageBB_url
    const imageBB_url = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_Image_Upload_token}`

    const handleAddClassSubmit = async (data) => {
        
        const newClass = {
            className: data.className,
            instructorName: user?.displayName,
            instructorEmail: user?.email,
            availableSeats: data.availableSeats,
            price: data.price,
            status: "pending"
        }
        try {


            const formData = new FormData();
            formData.append('image', data.classImage[0]);

            // post image to imageBB
            const response = await axios.post(imageBB_url, formData)
            if (response.data.success) {
                const imgURL = response.data.data.display_url;
                newClass.classImage = imgURL;

                // set the data to database
                const res = await axiosSecure.post('/add-a-class', newClass);

                if (res.data.insertedId) {
                    reset()
                    Swal.fire({
                        position: 'center',
                        icon: 'success',
                        title: `You have successfully add a class ${user?.displayName}your class is pending for approved`,
                        showConfirmButton: false,
                        timer: 1500
                    })
                }
            }

        } catch (error) {
            if (error) {
                Swal.fire({
                    position: 'center',
                    icon: 'error',
                    title: `Sorry! ${error.message}`,
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-6 bg-white rounded-md shadow-md">
                <h2 className="text-2xl font-semibold mb-6">Instructor Dashboard</h2>

                    <h3 className="text-lg font-semibold mb-2">Add a Class</h3>
                <section>
                    <form onSubmit={handleSubmit(handleAddClassSubmit)} className="grid sm:grid-cols-1 lg:grid-cols-2 gap-5">
                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="className">
                                Class Name:
                            </label>
                            <input
                                id="className"
                                type="text"
                                {...register("className", { required: true })}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="classImage">
                                Class Image:
                            </label>
                            <input
                                id="classImage"
                                type="file"
                                {...register("classImage", { required: true })}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                                name="classImage"
                            />

                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorName">
                                Instructor Name:
                            </label>
                            <input
                                id="instructorName"
                                type="text"
                                {...register("instructorName")}
                                defaultValue={user?.displayName}
                                readOnly
                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight bg-gray-100"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="instructorEmail">
                                Instructor Email:
                            </label>
                            <input
                                id="instructorEmail"
                                type="text"
                                {...register("instructorEmail")}
                                defaultValue={user?.email}
                                readOnly
                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight bg-gray-100"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="availableSeats">
                                Available Seats:
                            </label>
                            <input
                                id="availableSeats"
                                type="number"
                                {...register("availableSeats", { required: true })}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="price">
                                Price:
                            </label>
                            <input
                                id="price"
                                type="number"
                                {...register("price", { required: true })}
                                className="w-full border border-gray-300 rounded-md py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full lg:col-span-2 bg-blue-500 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        >
                            Add
                        </button>
                    </form>
                </section>
            </div>
        </div>
    );
};

export default AddClasses;