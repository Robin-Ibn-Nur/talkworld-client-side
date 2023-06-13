import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { loading, user } = useAuth();
    const [axiosSecure] = useAxiosSecure();

    const { data: isAdmin, isLoading } = useQuery(["isAdmin", user?.email], {
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            return res.data.admin;
        }
    });

    return [isAdmin, isLoading];
};

export default useAdmin;