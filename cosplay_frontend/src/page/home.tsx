import { useNavigate } from "react-router-dom";
import Nav from "./nav";
export default function Home() {
    const navigate = useNavigate()

    return (
        <>
            <Nav />
            <div className="home-content">
                <div className="banner">
                    <div className="banner-content">

                    </div>
                </div>
                <button className="btn-regis" onClick={() => { navigate("/register") }}>
                    Register Now!!
                </button>
            </div>
        </>
    )
}