import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allClass = [], refetch } = useQuery(['populer6Classes'], async () => {
        const res = await axiosSecure.get('/populer6Classes')
        return res.data;

    })
    return [allClass, axiosSecure, refetch]
};

export default useAllClasses;