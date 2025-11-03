import {useNavigate } from "react-router-dom";
export default function Home() {
    const navigate = useNavigate()

    return (
        <>
            <div className="nav-cos">
                <div className="cosplay">
                    Cosplayer
                </div>
                <button className="login_b" onClick={() => { navigate("/login") }}>
                    Login
                </button>
            </div>
            <div className="home-content">
                <div className="banner">
                    <div className="banner-content">

                    </div>
                </div>
                <button className="btn-regis" onClick={()=>{navigate("/register")}}>
                    Register Now!!
                </button>
            </div>
        </>
    )
}