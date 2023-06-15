import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

const usePopulerClasses = () => {
    const [axiosSecure] = useAxiosSecure();
    const { data: populerClasses = [], refetch } = useQuery(['populerClasses'], async () => {
        const res = await axiosSecure.get('/populerClasses')
        return res.data;

    })
    return [populerClasses, axiosSecure, refetch]
};

export default usePopulerClasses;