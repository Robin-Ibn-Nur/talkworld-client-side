import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../CustomHooks/useAxiosSecure";
import { AiOutlineUserSwitch, AiOutlineVerified } from "react-icons/ai";
import { useTitle } from "../../../CustomHooks/useTitle";


const ManageUsers = () => {
    useTitle('TalkWorld')
    const [axiosSecure] = useAxiosSecure();
    const { data: users = [], refetch } = useQuery(['users'], async () => {
        const res = await axiosSecure.get('/users')
        return res.data;

    });



    const handleMakeAdmin = async (user) => {
        console.log(user);
        try {
            const response = await axiosSecure.patch(`/users/admin/${user._id}`);
            console.log(response.data);
            refetch()
        } catch (error) {
            console.error(error);
        }
    };

    const handleMakeInstructor = async (user) => {
        console.log("instructor", user);
        try {
            const response = await axiosSecure.patch(`/users/instructor/${user._id}`);
            console.log(response.data);
            refetch()
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="container">
            {!users ? <h1 className="text-2xl font-bold">No Users Available at the Moment</h1> :
                <div className="overflow-x-auto">
                    <h1 className="text-2xl font-bold text-center underline mb-5">All Users are Available</h1>
                    <table className="table-auto w-full font-serif border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-200">
                                <th className="px-4 py-2"></th>
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Action</th>
                                <th className="px-4 py-2"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users?.map((userInfo, i) => <tr key={userInfo._id} className="bg-gray-100">
                                    <th className="px-4 py-2">{i + 1}</th>
                                    <td className="px-4 py-2">{userInfo.name}</td>
                                    <td className="px-4 py-2">{userInfo.email}
                                    </td>
                                    {userInfo.role && (
                                        <td className="flex items-center justify-center font-bold gap-2 rounded bg-gradient-to-r from-cyan-500 to-blue-500  hover:text-white px-4 py-1 border">
                                            <AiOutlineVerified />{userInfo.role === "admin" && "Admin" || userInfo.role === "instructor" && "Instructor" || "Student"}</td>

                                    )}
                                    {userInfo.role === "student" && (
                                        <>
                                            <td
                                                onClick={() => handleMakeAdmin(userInfo)}
                                                className="btn hover:bg-[#FF6600] hover:text-white px-4 py-1"
                                            >
                                                <AiOutlineUserSwitch />
                                                Make admin
                                            </td>
                                            <td
                                                onClick={() => handleMakeInstructor(userInfo)}
                                                className="btn hover:bg-[#FF6600] px-4 py-1 hover:text-white"
                                            >
                                                <AiOutlineUserSwitch />
                                                Make instructor
                                            </td>
                                        </>
                                    )}




                                </tr>)
                            }


                        </tbody>
                    </table>
                </div>}
        </div>
    );
};

export default ManageUsers;