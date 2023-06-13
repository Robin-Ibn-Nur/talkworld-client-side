import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const useInstructor = () => {
    const { loading, user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isInstructor, isLoading } = useQuery(["isInstructor", user?.email], {
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/instructor/${user?.email}`);
            return res.data.instructor;
        }
    });

    return [isInstructor, isLoading];
};

export default useInstructor;
