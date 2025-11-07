import { useNavigate } from "react-router-dom";
export default function Nav() {
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
        </>
    )
}