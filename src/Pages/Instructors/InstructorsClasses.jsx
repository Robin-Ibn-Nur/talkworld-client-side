import { useLoaderData } from "react-router-dom";

const InstructorsClasses = () => {
    const data = useLoaderData();
    return (
        <div>
            {data.map((cls) => (
                <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white p-6 rounded-lg shadow-lg" key={cls._id}>
                    <img
                        src={cls.classImage}
                        alt={cls.className}
                        className="w-full h-40 object-cover mb-4 rounded"
                    />
                    <h2 className="text-xl font-bold mb-2">{cls.className}</h2>
                    <p className="text-gray-300 mb-4">Instructor: {cls.instructorName}</p>
                    <p className="text-gray-300 mb-4">Email: {cls.instructorEmail}</p>
                    <p className="text-gray-300 mb-4">Available Seats: {cls.availableSeats}</p>
                    <p className="text-gray-300 mb-4">Price: {cls.price}</p>
                    <p className="text-gray-300 mb-4">Status: {cls.status}</p>
                </div>
            ))}

        </div>
    );
};

export default InstructorsClasses;