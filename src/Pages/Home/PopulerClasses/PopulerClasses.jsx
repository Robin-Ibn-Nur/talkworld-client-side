// import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../CustomHooks/useAxiosSecure";
import useAllClasses from "../../../CustomHooks/useAllClasses";

const PopulerClasses = () => {
    // const [axiosSecure] = useAxiosSecure();
    // const { data: populerClasses = [] } = useQuery(['populerClasses'], async () => {
    //     const res = await axiosSecure.get('/populerClasses')
    //     console.log(res.data);
    //     return res.data;

    // })
    const [populerClasses] = useAllClasses()
    console.log(populerClasses);
    return (
        <div>
            <h1 className="text-2xl font-bold">populerClasses..{populerClasses.length}</h1>
        </div>
    );
};

export default PopulerClasses;