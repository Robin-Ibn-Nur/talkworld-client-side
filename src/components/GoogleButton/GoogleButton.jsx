import Swal from "sweetalert2";
import useAuth from "../../CustomHooks/useAuth";
import googleImage from "../GoogleButton/google.png"
import { useLocation, useNavigate } from 'react-router-dom'

const GoogleButton = ({text}) => {
    const { signInWithGoogle, updateUserProfile, setLoading } = useAuth()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || '/'
    const handleGoogleLogIn = () => {
        signInWithGoogle()
            .then(result => {
                const { displayName, photoURL } = result.user;
                if (result?.user) {
                    updateUserProfile(displayName, photoURL)
                        .then(() => {
                            navigate(from, { replace: true })
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: `Welcome ${displayName} Your Profile Updated Successfully`,
                                showConfirmButton: false,
                                timer: 2000
                            })
                        }).catch(error => console.log(error))
                }
            }).catch(error => {
                setLoading(false)
                console.log(error.message);
                if (error) {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        footer:`<a href="">${error.message}</a>`
                    })
                }
            })
    }
    return <button onClick={handleGoogleLogIn} className="mx-auto flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-md transition-colors duration-300">
        <span className="w-5 h-5 bg-center bg-no-repeat bg-contain mr-2" style={{ backgroundImage: `url(${googleImage})` }}></span><span className="font-bold">{text} with Google</span>
    </button>


};

export default GoogleButton;