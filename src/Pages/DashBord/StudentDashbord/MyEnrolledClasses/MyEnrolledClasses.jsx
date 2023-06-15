import useEnrolledClasses from "../../../../CustomHooks/useEnrolledClasses";
import Enrolled from "./Enrolled";

const MyEnrolledClasses = () => {
    const [user, payments] = useEnrolledClasses()

    return (
        <div className="container font-serif">
            <h1 className="text-2xl text-center font-bold mb-5">{user?.displayName}</h1>
            {!payments && !payments.status === "paid" ? <h1 className="text-2xl font-bold">Not Enrolled yet</h1> :
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Instructor
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Available Seats
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Enrolled Price
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                payments?.map((cls, index) => <Enrolled key={cls._id}
                                    cls={cls}
                                    index={index}
                                ></Enrolled>)
                            }


                        </tbody>
                    </table>
                </div>}
        </div>
    );
};

export default MyEnrolledClasses;