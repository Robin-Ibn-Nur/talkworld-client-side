import { Link } from "react-router-dom"
const ErrorPage = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen bg-gray-100" style={{
            backgroundRepeat: "no-repeat", backgroundPosition: "center", backgroundSize: "cover",
            backgroundImage: "url('https://img.freepik.com/free-psd/3d-female-character-with-404-error-message_23-2148938897.jpg?w=740&t=st=1686641136~exp=1686641736~hmac=bca3323f8209ef1de8c4be3978b2c77de26cc438599fc484011ae0876d744d59')",
        }}>
            <p className="text-8xl text-gray-700 mb-6">Page not found</p>
            <div className="flex space-x-4">
                <Link
                    to="/"
                    className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-orange-600"
                >
                    Go to Home Page
                </Link>
                <button
                    onClick={() => window.history.back()}
                    className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600"
                >
                    Go Back
                </button>
            </div>
        </div>
    );

};

export default ErrorPage;