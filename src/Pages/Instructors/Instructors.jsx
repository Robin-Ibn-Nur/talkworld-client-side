import { useApi } from "../../CustomHooks/useApi";
import Card from "./Card";

const Instructors = () => {
    const { instructors } = useApi();
    
   
    return (
        <div className="bg-gray-100 min-h-screen p-8 my-5">
            <h2 className="text-center text-2xl font-semibold font-serif my-10 underline"> {instructors.length === 0
                ?
                "Opps! No Instructors at the moment. Sorry!"
                :
                <>Our {instructors.length} Best Instructors</>}</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    instructors.map(instructor => <Card key={instructor._id}
                        instructor={instructor}
                    ></Card>)
                }
            </div>
        </div>
    );
};

export default Instructors;