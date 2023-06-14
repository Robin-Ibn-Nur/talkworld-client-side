import { Link } from "react-router-dom";

const Card = ({ instructor }) => {
    const { name, email, photo, role } = instructor;
    return (
        <div className="bg-white shadow-lg rounded-lg overflow-hidden w-full ">
            <img src={photo} alt={name} className="w-full h-56 object-cover" />
            <div className="p-4">
                <h3 className="font-medium mb-2">{name}</h3>
                <h3 className="text-xl font-medium mb-2">{role}</h3>
                <p className="text-gray-700 mb-2">Email: {email}</p>
                <Link to="/" className="btn btn-outline hover:bg-orange-500 text-blue-500">See Classes</Link>
            </div>
        </div>
    );
};

export default Card;