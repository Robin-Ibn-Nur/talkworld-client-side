import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";


const usePaymentHistory = () => {
    const { user } = useAuth();
    const [axiosSecure] = useAxiosSecure();
    const { data: payMentHistory = [], refetch } = useQuery({
        queryKey: ['payMentHistory', user?.email],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payMentHistory?email=${user?.email}`);
            return res.data;
        }
    })
    return {user, payMentHistory, refetch, axiosSecure}
};

export default usePaymentHistory;