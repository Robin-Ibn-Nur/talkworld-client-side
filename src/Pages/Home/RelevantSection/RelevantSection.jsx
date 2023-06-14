import 'animate.css';

const RelevantSection = () => {
    return (
        <section className="bg-gradient-to-r from-purple-500 to-blue-500 py-12 my-5 rounded">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold text-white mb-4 animate__animated animate__fadeInUp">
                    Discover a World of Possibilities
                </h2>
                <p className="text-lg text-white mb-8 animate__animated animate__fadeInUp">
                    Explore new horizons and unlock your potential with our diverse range of classes.
                </p>
                <button className="bg-white text-purple-500 hover:bg-purple-100 py-2 px-6 rounded-lg text-lg font-medium animate__zoomIn animate__animated animate__fadeInUp">
                    Learn More
                </button>
            </div>
        </section>

    );
};

export default RelevantSection;