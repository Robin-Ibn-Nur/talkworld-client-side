import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../CustomHooks/useAuth";
import useAxiosSecure from "../../../CustomHooks/useAxiosSecure";
import Classes from "./Classes";
import { useTitle } from "../../../CustomHooks/useTitle";

const MyClasses = () => {
    useTitle('TalkWorld')
    const { user, loading } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: instructorData = [] } = useQuery({
        queryKey: ["instructorData", user?.email],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data;
        }
    });
    return (
        <>
            <h2 className="text-2xl font-semibold mb-4">Instructor: {user?.displayName}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 bg-gray-100 p-4 gap-5">

                {
                    instructorData.map(item => <Classes
                        key={item?._id}
                        item={item}
                    ></Classes>)
                }
                {instructorData.length === 0 && (
                    <p className="text-center">No classes added yet.</p>
                )}
            </div>
        </>
    );
};

export default MyClasses;