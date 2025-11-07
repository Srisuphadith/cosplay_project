import { register } from "../api/api";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Register() {
    const navigate = useNavigate()
    async function regisHadle() {
        const user_name = (document.getElementById("username") as HTMLInputElement).value
        const pass = (document.getElementById("password") as HTMLInputElement).value
        const first_name = (document.getElementById("firstname") as HTMLInputElement).value
        const last_name = (document.getElementById("lastname") as HTMLInputElement).value
        const email = (document.getElementById("email") as HTMLInputElement).value

        if (user_name == "" || pass == "" || first_name == "" || last_name == "" || email == "") {
            toast("please fill username and password")
            return
        }

        const res = await register(user_name, pass, first_name, last_name, email)
        const data = await res.json()

        if (!res.ok) return
        if (!data.success) return
        navigate("/profile")
    }
    return (
        <>
            <div className="login-container">
                <div className="login-form">
                    <h1>Sign up</h1>
                    <p>username</p>
                    <input placeholder="username" id="username"></input>
                    <p>password</p>
                    <input placeholder="password" type="password" id="password"></input>
                    <p>firstname</p>
                    <input placeholder="firstname" id="firstname"></input>
                    <p>lastname</p>
                    <input placeholder="lastname" id="lastname"></input>
                    <p>email</p>
                    <input placeholder="email" id="email" style={{ marginBottom: "20px" }}></input>
                    <button id="b_submit" onClick={regisHadle}>Register</button>
                    <Link to="/login">already have a account</Link>
                </div>
            </div>
            <ToastContainer />
        </>
    )
}