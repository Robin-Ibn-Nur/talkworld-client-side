const Classes = ({ item }) => {
    return (
        <div className="bg-white rounded-md shadow-md p-4 mb-4">
            <h3 className="text-lg font-semibold mb-2">Language: {item.className}</h3>
            <img className="h-40 w-full" src={item?.classImage} alt="" />
            <p>Status: {item.status}</p>
            <p>Total Enrolled Students: {item?.enrolledStudents}</p>
            {item.status === 'denied' && (
                <div className="mt-2">
                    <p className="font-semibold">Feedback:</p>
                    <p>{item?.feedback}</p>
                </div>
            )}
            <button className="bg-blue-500 hover:bg-orange-500 text-white font-semibold py-2 px-4 rounded mt-4">
                Update
            </button>
        </div>
    );
};

export default Classes;