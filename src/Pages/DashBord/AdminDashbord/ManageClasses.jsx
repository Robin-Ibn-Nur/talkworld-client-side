import { useState } from "react";
import useAllClasses from "../../../CustomHooks/useAllClasses";
import { useForm } from "react-hook-form";
import useAuth from "../../../CustomHooks/useAuth";

const ManageClasses = () => {
    const { user } = useAuth();
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


    const tableHeaders = [
        { id: 1, name: 'Class Image' },
        { id: 2, name: 'Class Name' },
        { id: 3, name: 'Instructor Name' },
        { id: 4, name: 'Instructor Email' },
        { id: 5, name: 'Available Seats' },
        { id: 6, name: 'Price' },
        { id: 7, name: 'Status' },
        { id: 8, name: 'Actions' },
    ];

    return (
        <div className="">
            <h3 className="text-2xl text-center mb-5 uppercase font-bold">{user?.displayName}</h3>
            <div>
                <h1 className="text-center text-2xl font-semibold font-serif my-10 underline">{ allClass.length === 0 ? "Opps! No Classes Added": "Available Classes"}</h1>
            </div>
            {
                allClass.length > 0 && <table className="container mx-auto overflow-x-auto table-auto w-full border-collapse border border-gray-300 font-serif">
                    <thead className="text-sm tracking-tighter">
                        <tr className="bg-gray-200">
                            {tableHeaders.map((header) => (
                                <th key={header.id}>{header.name}</th>
                            ))}
                        </tr>
                    </thead>
                    <tbody className="text-center tracking-tighter">
                        {allClass.map((classItem) => (
                            <tr key={classItem._id} >
                                <td>
                                    <img src={classItem.classImage} alt="Class" className="w-10 h-10" />
                                </td>
                                <td>{classItem.className}</td>
                                <td>{classItem.instructorName}</td>
                                <td>{classItem.instructorEmail}</td>
                                <td>{classItem.availableSeats}</td>
                                <td>{classItem.price}</td>
                                <td>{classItem.status}</td>
                                <td className="flex space-x-2 space-y-2 items-center">
                                    <button className={classItem.status === "approved" ? "btn btn-outline btn-xs" : "btn btn-outline hover:btn-success btn-xs"}
                                        onClick={() => handleApprove(classItem._id)}
                                        disabled={classItem.status !== "pending"}
                                    >
                                        Approve
                                    </button>
                                    <button className={classItem.status === "denied" ? "btn btn-outline btn-xs btn-error" : "btn btn-outline hover:btn-error btn-xs"}
                                        onClick={() => handleDeny(classItem._id)}
                                        disabled={classItem.status !== "pending"}
                                    >
                                        Deny
                                    </button>
                                    <button className="btn btn-outline hover:btn-warning btn-xs" onClick={() => setSelectedClass(classItem)}>Send Feedback</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }

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
