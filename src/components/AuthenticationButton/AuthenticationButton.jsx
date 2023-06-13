
const AuthenticationButton = ({text}) => {
    return (
        <button className="font-semibold text-white rounded bg-[#FF6600]  hover:outline h-[2.8rem] w-full text-center" type="submit">{text}</button>
    );
};

export default AuthenticationButton;