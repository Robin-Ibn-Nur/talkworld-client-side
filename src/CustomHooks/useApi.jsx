import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useApi = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: instructors = [] } = useQuery(['instructors'], async () => {
        const res = await axiosSecure.get('/instructor');
        return res.data;
    })
    return { instructors };
};
