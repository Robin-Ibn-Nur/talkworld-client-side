import useSixInstructor from "../../../CustomHooks/useSixInstructor";

const PopulerInstructor = () => {
    const { sixInstructors } = useSixInstructor();
    return (
        <div className="my-5">
            <h3 className="text-2xl font-bold my-5">Our Populer Instructor</h3>

            <div className=" grid grid-cols-3 gap-4 ">
                {sixInstructors.map((instructor) => (
                    <div key={instructor._id} className="p-4 bg-white rounded shadow transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#008080] duration-300 hover:text-white">
                        <img
                            src={instructor.photo}
                            alt={instructor.name}
                            className="w-full h-40 object-cover rounded"
                        />
                        <h3 className="mt-4 text-xl font-semibold">{instructor.name}</h3>
                        <p className="mt-2">{instructor.role}</p>

                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopulerInstructor;