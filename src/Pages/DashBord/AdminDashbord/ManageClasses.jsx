import { useState } from "react";
import useAllClasses from "../../../CustomHooks/useAllClasses";
import { useForm } from "react-hook-form";

const ManageClasses = () => {
    const [allClass, axiosSecure, refetch] = useAllClasses();
    const [selectedClass, setSelectedClass] = useState(null);
    const { register, handleSubmit, reset } = useForm();
    const [isLoading, setIsLoading] = useState(false);

    const handleApprove = async (id) => {
        try {
            setIsLoading(true);

            
            const response = await axiosSecure.patch(`/classes/approve/${id}`, { status: 'approved' });
            refetch()
            console.log(`Approving class with ID: ${id}`);
            console.log('Response:', response.data);

            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const handleDeny = async (id) => {
        try {
            setIsLoading(true);

            
            const response = await axiosSecure.patch(`/classes/denied/${id}`, { status: 'denied' });
            refetch()
            console.log(`Denying class with ID: ${id}`);
            console.log('Response:', response.data);

            setIsLoading(false);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onSubmit = async (data) => {
        
        try {
            setIsLoading(true);

            
            const response = await axiosSecure.post(`/classes/feedback/${selectedClass._id}`, {
                feedback: data.feedback,
            });
            if (response.data.updateResult.acknowledged === "true") {
                console.log("yes update successfull");
            }
            console.log('Sending feedback:', data.feedback);
            

            setIsLoading(false);
            reset();
            onClose();
        } catch (error) {
            console.error('Error:', error);
        }
    };

    const onClose = () => {
        setSelectedClass(null);
    };

    return (
        <div className="container mx-auto ">
            <table className="table-auto w-full border-collapse border border-gray-300">
                <thead className="text-sm">
                    <tr className="bg-gray-200">
                        <th>Class Image</th>
                        <th>Class Name</th>
                        <th>Instructor Name</th>
                        <th>Instructor Email</th>
                        <th>Available Seats</th>
                        <th>Price</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody className="text-center">
                    {allClass.map((classItem) => (
                        <tr key={classItem._id}>
                            <td>
                                <img src={classItem.classImage} alt="Class" className="w-10 h-10" />
                            </td>
                            <td>{classItem.className}</td>
                            <td>{classItem.instructorName}</td>
                            <td>{classItem.instructorEmail}</td>
                            <td>{classItem.availableSeats}</td>
                            <td>{classItem.price}</td>
                            <td>{classItem.status}</td>
                            <td className="flex justify-between">
                                <button
                                    onClick={() => handleApprove(classItem._id)}
                                    disabled={classItem.status !== "pending"}
                                >
                                    Approve
                                </button>
                                <button
                                    onClick={() => handleDeny(classItem._id)}
                                    disabled={classItem.status !== "pending"}
                                >
                                    Deny
                                </button>
                                <button onClick={() => setSelectedClass(classItem)}>Send Feedback</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {selectedClass && (
                <div className="w-full fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
                    <div className="bg-white p-4 rounded">
                        <h2>Send Feedback</h2>
                        <p>Class: {selectedClass.className}</p>
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <textarea
                                {...register("feedback")}
                                placeholder="Enter your feedback"
                                className="w-full h-42"
                            ></textarea>
                            <div className="flex justify-between mt-4">
                                <button
                                    type="submit"
                                    className="bg-blue-500 text-white px-4 py-2 rounded"
                                    disabled={isLoading}
                                >
                                    {isLoading ? "Sending..." : "Send"}
                                </button>
                                <button
                                    type="button"
                                    onClick={onClose}
                                    className="bg-gray-300 text-gray-700 px-4 py-2 rounded"
                                    disabled={isLoading}
                                >
                                    Cancel
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ManageClasses;
