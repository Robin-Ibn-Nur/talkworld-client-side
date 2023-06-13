import Swal from "sweetalert2";
import useAuth from "../../CustomHooks/useAuth";

const ReUsableButton = ({ text }) => {
    const { logOut } = useAuth()

    const handleLogOut = () => {
        logOut().then(() => {
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: 'Sign-out successful.',
                showConfirmButton: false,
                timer: 1500
            })
        }).catch(error=>console.log(error))
    }
    return (
        <input onClick={handleLogOut} type="submit" className="hover:bg-[#FF6600] text-white py-2 px-4 rounded-lg" value={text} />
    );
};

export default ReUsableButton;