

const Enrolled = ({ cls, index }) => {
    console.log(cls);
    return (
        <>
            <tr>
                <td className="px-6 py-4 whitespace-nowrap hover">
                    {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <img src={cls.classImage} alt="Class" className="h-12 w-12 rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.className}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.instructorName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.availableSeats}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.price}</td>
                <td className="px-6 py-4 whitespace-nowrap">{cls.status}</td>
            </tr>
        </>
    );
};

export default Enrolled;