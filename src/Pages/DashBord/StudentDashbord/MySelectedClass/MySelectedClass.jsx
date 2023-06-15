import SellectedClass from "./SellectedClass";
import Swal from "sweetalert2";
import useSelectedClass from "../../../../CustomHooks/useSelectedClass";

const MySelectedClass = () => {
    const [user, selectedClasses, refetch, axiosSecure] = useSelectedClass()

    console.log(selectedClasses);
    const handleDelete = (id) => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const res = await axiosSecure.delete(`/selectedClasses/${id}`);
                    console.log(res.data);
                    refetch()
                    Swal.fire(
                        'Deleted!',
                        'Your Selected Course has been deleted.',
                        'success'
                    );
                } catch (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer: `<a href="">${error.message}</a>`
                    })
                }
            }
        });
    };


    return (
        <div className="container font-serif">
            <h1 className="text-2xl text-center font-bold mb-5">{user?.displayName}</h1>
            {!selectedClasses ? <h1 className="text-2xl text-center font-bold">Opps! You have not selected any classes</h1> :
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead>
                            <tr>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Image
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Name
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Instructor
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Available Seats
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Price
                                </th>
                                <th className="px-6 py-3 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Actions
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            {
                                selectedClasses?.map((cls, index) => <SellectedClass
                                    key={cls._id}
                                    cls={cls}
                                    index={index}
                                    handleDelete={handleDelete}
                                ></SellectedClass>)
                            }

                        </tbody>
                    </table>
                </div>}
        </div>
    );
};

export default MySelectedClass;