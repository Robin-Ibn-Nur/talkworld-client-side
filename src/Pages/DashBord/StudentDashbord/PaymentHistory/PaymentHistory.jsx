import usePaymentHistory from "../../../../CustomHooks/usePaymentHistory";
import TRow from "./TRow";

const PaymentHistory = () => {
    const { payMentHistory, user } = usePaymentHistory();
    const recentPayments = [...payMentHistory].sort((a, b) => new Date(b.date) - new Date(a.date));


    const tableHead = [
        "",
        "Image",
        "Name",
        "Instructor",
        "Available Seats",
        "Enroll Date & Time",
        "Status",
        "TransactionId",
    ]
    return (
        <div className="container font-serif">
            <h1 className="text-2xl text-center font-bold mb-5">{user?.displayName}</h1>
            {!recentPayments && !recentPayments.status === "paid" ? <h1 className="text-2xl font-bold">Not Paid for any Classes</h1> :
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>

                                {tableHead.map((header) => (
                                    <th
                                        key={header}
                                        className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                                    >
                                        {header}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {recentPayments?.map((payment, index) => {
                                const formattedDate = new Date(payment.date).toLocaleDateString();
                                const formattedTime = new Date(payment.date).toLocaleTimeString();

                                return (
                                    <TRow
                                        key={payment._id}
                                        payment={payment}
                                        index={index}
                                        formattedDate={formattedDate}
                                        formattedTime={formattedTime}
                                    />
                                );
                            })}


                        </tbody>
                    </table>
                </div>}
        </div>
    );
};

export default PaymentHistory;