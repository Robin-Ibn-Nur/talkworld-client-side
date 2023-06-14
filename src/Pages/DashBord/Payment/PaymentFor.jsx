

const PaymentFor = ({ data }) => {
    const {
        availableSeats,
        classImage,
        className,
        instructorEmail,
        instructorName,
        price } = data;
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-500 py-8 sm:py-12 md:py-16">
            <div className="px-4">
                <div className="flex flex-col items-center justify-center">
                    <img src={classImage} alt={className} className="w-32 h-32 sm:w-48 sm:h-48 md:w-64 md:h-64 rounded-full mb-4" />
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">{className}</h2>
                    <p className="text-lg sm:text-xl md:text-2xl text-white mb-4">Instructor: {instructorName}</p>
                    <p className="text-lg sm:text-xl md:text-2xl text-white mb-4">Available Seats: {availableSeats}</p>
                    <p className="text-lg sm:text-xl md:text-2xl text-white mb-4">Price: ${price}</p>
                    <a href={`mailto:${instructorEmail}`} className="bg-white text-blue-500 font-semibold py-2 px-4 rounded hover:bg-blue-500 hover:text-white transition-colors duration-300">
                        Contact Instructor
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PaymentFor;