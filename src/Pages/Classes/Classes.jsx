import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../CustomHooks/useAxiosSecure";
import { useTitle } from "../../CustomHooks/useTitle";
import useAuth from "../../CustomHooks/useAuth";
import useAdmin from "../../CustomHooks/useAdmin";
import useInstructor from "../../CustomHooks/useInstructor";
import Swal from "sweetalert2";

const Classes = () => {
    useTitle("TalkWorld")
    const { user } = useAuth();
    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor()
    const [axiosSecure] = useAxiosSecure();
    const { data: classes = [] } = useQuery(['classes'], async () => {
        const res = await axiosSecure.get('/classes')
        return res.data;
    });
    console.log("from class page",classes);


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
            console.log(res.data, newClass);
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
            <h1 className="text-2xl font-bold my-5 hover:underline">Classes available {classes.length} but waiting for Approved</h1>

            <div className="bg-gray-100 min-h-screen p-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* cls.status === "pending" ? "" :  */}
                    {classes.map((cls) => (<div
                        key={cls._id}
                        className={`bg-white hover:animate shadow-lg rounded-lg p-6 ${cls.availableSeats === 0 ? 'bg-red-200' : 'bg-white'
                            }`}
                    >
                        <img
                            src={cls.classImage}
                            alt={cls.classImage}
                            className="w-full h-40 object-cover mb-4 rounded"
                        />
                        <h2 className="text-xl font-bold mb-2">{cls.className}</h2>
                        <p className="text-gray-600 mb-4">Instructor: {cls.instructorName}</p>
                        <p className="mb-4">
                            Available Seats: {cls.availableSeats === 0 ? '0 (Full)' : cls.availableSeats}
                        </p>
                        <p className="mb-4">Price: {cls.price}</p>
                        {user ? (
                            <button
                                onClick={() => handleSelect(cls)}
                                disabled={!user || isAdmin || isInstructor || cls.availableSeats === 0}
                                className={`bg-blue-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded ${!user || isAdmin || isInstructor || cls.availableSeats === 0 ? 'opacity-50 cursor-not-allowed' : ''
                                    }`}
                            >
                                Select
                            </button>
                        ) : (
                            <p className="text-red-500">Please log in to select the course.</p>
                        )}
                    </div>))}
                </div>
            </div>
        </div>
    );
};

export default Classes;