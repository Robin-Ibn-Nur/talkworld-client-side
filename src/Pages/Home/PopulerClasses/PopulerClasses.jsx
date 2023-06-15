import usePopulerClasses from "../../../CustomHooks/usePopulerClasses";


const PopulerClasses = () => {
    const [populerSixClasses] = usePopulerClasses()
    const topClasses = [...populerSixClasses].sort((a, b) => b.student - a.student);
    return (
        <div className="my-5">
            
            <h1 className="text-2xl font-bold my-5">
                <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
                </span>
                Populer Classes..
            </h1>
            <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-4">
                {topClasses.map((classItem) => (
                    <div key={classItem._id} className="p-4 bg-white rounded shadow transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-[#008080] duration-300 hover:text-white">
                        <img
                            src={classItem.classImage}
                            alt={classItem.className}
                            className="w-full h-[200px] object-cover rounded"
                        />
                        <h3 className="mt-4 text-xl font-semibold">{classItem.className}</h3>
                        <p className="mt-2">{classItem.student} students</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default PopulerClasses;