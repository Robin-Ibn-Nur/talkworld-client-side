import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useTitle } from "../../CustomHooks/useTitle";
import useAuth from "../../CustomHooks/useAuth";
import useAdmin from "../../CustomHooks/useAdmin";
import useInstructor from "../../CustomHooks/useInstructor";
import Swal from "sweetalert2";
import useStudent from "../../CustomHooks/useStudent";

const Classes = () => {
    useTitle("TalkWorld")
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    const [isStudent] = useStudent()
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    });

    const handleSelect = async (cls) => {

        const newClass = {
            availableSeats: cls.availableSeats,
            classImage: cls.classImage,
            className: cls.className,
            instructorEmail: cls.instructorEmail,
            instructorName: cls.instructorName,
            price: cls.price,
            status: cls.status,
            userEmail: user?.email
        };
        try {
            const res = await axiosSecure.post('/selectedClasses',
                newClass);
            if (res.data.insertedId) {
                Swal.fire({
                    position: 'center',
                    icon: 'success',
                    title: 'Your course has been saved, please see the dashbord',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        } catch (error) {
            if (error) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                    footer: `<a href="">${error.message}</a>`
                })
            }
        }
    }
    return (
        <div>
            <div className="bg-gray-100 min-h-screen p-8 my-5">
                {classes.map(cls => !cls.status === "approved" && <h1 key={cls._id}
                    className="text-center text-2xl font-semibold font-serif my-10 underline">Opps! No Class Found Here</h1>)}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {classes.map((cls) => (
                        cls.status === "approved" && (
                            <div
                                key={cls._id}
                                className={`bg-white hover:animate shadow-lg rounded-lg p-6 ${cls.availableSeats === 0 ? 'bg-red-600 text-white' : 'bg-white'}`}
                            >
                                <img
                                    src={cls.classImage}
                                    alt={cls.classImage}
                                    className="w-full h-40 object-cover mb-4 rounded"
                                />
                                <h2 className="text-xl font-bold mb-2">{cls.className}</h2>
                                {/* <div className="flex justify-between">
                                    
                                </div> */}
                                <p className="text-gray-600 mb-4">Instructor: <span className="font-bold">{cls.instructorName}</span></p>
                                <p className="text-gray-600 mb-4">Status: {cls.status}</p>
                                <p className="mb-4">
                                    Available Seats: {cls.availableSeats === 0 ? '0 (Full)' : cls.availableSeats}
                                </p>
                                <p className="mb-4">Price: {cls.price}</p>
                                {user ? (
                                    <button
                                        onClick={() => handleSelect(cls)}
                                        disabled={!user || !isStudent || isAdmin || isInstructor || cls.availableSeats === 0}
                                        className={`bg-blue-700 text-white px-3 py-2 rounded-md text-xl font-medium hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md w-full text-xl font-medium ${!user || !isStudent || isAdmin || isInstructor || cls.availableSeats === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    >
                                        Select
                                    </button>
                                ) : (
                                    <p className="text-red-500">Please log in to select the course.</p>
                                )}
                            </div>
                        )

                    ))}
                </div>
            </div>
        </div>
    );
};

export default Classes;