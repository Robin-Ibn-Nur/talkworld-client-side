import useAuth from "../../CustomHooks/useAuth";

const Loader = () => {
    const { loading } = useAuth()

    if (loading) {
        return <div>
            Loading ........................
        </div>
    }

};

export default Loader;