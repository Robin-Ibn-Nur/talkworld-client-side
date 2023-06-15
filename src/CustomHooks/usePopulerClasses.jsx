import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePopulerClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: populerSixClasses = [], refetch } = useQuery(['populerSixClasses'], async () => {
        const res = await axiosSecure.get('/populerSixClasses')
        return res.data;

    })
    return [populerSixClasses, axiosSecure, refetch]
};

export default usePopulerClasses;