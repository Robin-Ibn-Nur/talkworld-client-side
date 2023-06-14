import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const useAllClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: allClass = [], refetch } = useQuery(['allClass'], async () => {
        const res = await axiosSecure.get('/allClass')
        return res.data;

    })
    return [allClass, axiosSecure, refetch]
};

export default useAllClasses;