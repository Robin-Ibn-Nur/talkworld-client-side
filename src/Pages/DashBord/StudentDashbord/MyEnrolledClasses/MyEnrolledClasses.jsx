import useEnrolledClasses from "../../../../CustomHooks/useEnrolledClasses";

const MyEnrolledClasses = () => {
    const [user, payments, refetch, axiosSecure] = useEnrolledClasses()
    console.log(payments);
    return (
        <div>
            My Enrolled Classes
        </div>
    );
};

export default MyEnrolledClasses;