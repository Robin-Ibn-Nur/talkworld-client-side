import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useSixInstructor = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: populerInstructor = [], isLoading } = useQuery(['populerInstructor'], async () => {
        const res = await axiosSecure.get('/populerInstructor');
        return res.data;
    })
    return { populerInstructor, isLoading };
};

export default useSixInstructor;