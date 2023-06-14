import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";


const useSixInstructor = () => {
    const [axiosSecure] = useAxiosSecure()
    const { data: sixInstructors = [] } = useQuery(['sixInstructors'], async () => {
        const res = await axiosSecure.get('/sixInstructors');
        return res.data;
    })
    return { sixInstructors };
};

export default useSixInstructor;