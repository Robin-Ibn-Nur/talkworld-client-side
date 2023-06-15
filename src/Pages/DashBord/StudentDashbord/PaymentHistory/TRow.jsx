

const TRow = ({ payment, formattedDate, formattedTime, index }) => {
    // const date = new Date(payment.date)
    // const formateDate = date.toLocaleDateString();
    // const formateTime = date.toLocaleTimeString();
    console.log(payment);
    return (
        <>
            <tr>
                <td className="px-6 py-4 whitespace-nowrap hover">
                    {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap">
                    <img src={payment.classImage} alt="Class" className="h-12 w-12 rounded-full" />
                </td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.className}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.instructorName}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.availableSeats}</td>
                <td className="px-6 py-4 whitespace-nowrap">{formattedDate} { formattedTime}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.status}</td>
                <td className="px-6 py-4 whitespace-nowrap">{payment.transactionId}</td>
            </tr>
        </>
    );
};

export default TRow;