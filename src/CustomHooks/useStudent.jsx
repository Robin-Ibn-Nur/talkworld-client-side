import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useStudent = () => {
    const { loading, user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isStudent, isLoading } = useQuery(["isStudent", user?.email], {
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/student/${user?.email}`);
            return res.data;
        }
    });

    return [isStudent, isLoading];
};

export default useStudent;