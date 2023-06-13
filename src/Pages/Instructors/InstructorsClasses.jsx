import { useLoaderData } from "react-router-dom";

const InstructorsClasses = () => {
    const data = useLoaderData();
    console.log(data);
    return (
        <div>
            <p>{data.length}</p>
        </div>
    );
};

export default InstructorsClasses;