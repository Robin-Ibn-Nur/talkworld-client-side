import { useApi } from "../../CustomHooks/useApi";
import Card from "./Card";

const Instructors = () => {
    const { instructors } = useApi();
    return (
        <div className="my-5">
            <h2 className="text-2xl font-bold font-serif my-5">Our {instructors.length} Best Instructors</h2>
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