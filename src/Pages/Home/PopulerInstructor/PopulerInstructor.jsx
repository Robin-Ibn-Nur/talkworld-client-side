import useSixInstructor from "../../../CustomHooks/useSixInstructor";

const PopulerInstructor = () => {
    const { populerInstructor } = useSixInstructor();
    
    return (
        <div className="my-5">
            <h1 className="text-2xl w-50 border bg-gradient-to-r from-purple-500 to-blue-500 py-12  rounded text-yellow-400 font-serif text-center font-bold my-5">
                ....Populer Instructor....
            </h1>

            <div className=" grid grid-cols-3 gap-4 ">
                {populerInstructor.map((instructor) => (
                    <div key={instructor._id} className="font-serif p-4 bg-white rounded shadow transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#008080] duration-300 hover:text-white">
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