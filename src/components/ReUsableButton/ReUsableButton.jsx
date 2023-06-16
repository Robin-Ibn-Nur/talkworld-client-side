import Swal from "sweetalert2";
import useAuth from "../../CustomHooks/useAuth";
import { motion } from "framer-motion"

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
        // <input onClick={handleLogOut} type="submit" className="hover:bg-[#FF6600] hover:text-white transition-colors duration-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium" value={text} />
        <motion.button
            whileHover={{
                scale: 1.2,
                transition: {duration:1},
            }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLogOut} type="submit"
            
        >
            {text}
        </motion.button>
    );
};

export default ReUsableButton;