
import { Link } from "react-router-dom";

const SellectedClass = ({ cls, index, handleDelete }) => {
    return (
        <>
            <tr>
                <td className="px-6 py-4 whitespace-nowrap hover">
                    {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <img src={cls.classImage} alt="Class" className="h-12 w-12 rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.className}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.instructorName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.availableSeats}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.price}</td>
                <td className="px-6 py-4 whitespace-nowrap flex justify-between">
                    {cls.availableSeats === 0 ? (
                        <span className="bg-red-500 text-white px-2 py-1 rounded">
                            Not Available
                        </span>
                    ) : (
                        <button
                            className="bg-blue-500 hover:bg-orange-600 text-white px-2 py-1 rounded"
                            disabled={cls.isInstructor || cls.isAdmin}
                            onClick={() => handleDelete(cls._id)}
                        >
                            Delete
                        </button>
                    )}
                    {cls.isInstructor || cls.isAdmin ? (
                        <span className="text-gray-500 ml-2">Not Available</span>
                    ) : (
                            <Link to="/dashbord/payment"
                            className="bg-green-500 hover:bg-green-700 text-white px-2 py-1 rounded"
                            disabled={cls.availableSeats === 0}
                        >
                            Pay
                        </Link>
                    )}
                </td>
            </tr>
        </>
    );
};

export default SellectedClass;