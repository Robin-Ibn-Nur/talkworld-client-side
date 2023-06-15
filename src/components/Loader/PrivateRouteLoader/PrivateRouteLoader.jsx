import "./PrivateRouteLoader.css"

const PrivateRouteLoader = () => {
    return (
        <div style={{
            backgroundColor:  "#000",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100vw',
            color: 'white',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'column',
        }} className="welcome">
            <div className="logo">
                <p className="top">Welcome</p>
                <p className="mid">TalkWorld<span>X</span></p>
                <p className="bottom">We have Pro..</p>
            </div>
            <div className="box-container">
                <div className="box"></div>
                <div className="box"></div>
                <div className="box"></div>
            </div>
        </div>
    );
};

export default PrivateRouteLoader;