import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/api";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Login() {
    //const notify = (mes:string) => toast(mes);
    const navigate = useNavigate()
    async function subHandle() {
        const user = (document.getElementById("user")as HTMLInputElement).value
        const pass = (document.getElementById("pass")as HTMLInputElement).value
        if (user == "" || pass == "") {
            toast("please fill username and password")
            //alert("please fill username and password")
            return
        }
        const res = await login(user, pass);
        const data = await res.json()
        if (!res.ok) {
            return
        }
        if (data.error) {
            toast("fault username or password")
            return
        }
        navigate("/profile")
    }
    return (
        <>
            <div className="login-form">
                <h1>Login</h1>
                <p>username</p>
                <input id="user" placeholder="username"></input>
                <p>password</p>
                <input id="pass" placeholder="password" type="password"></input>
                <br></br>
                <button id="b_submit" onClick={subHandle}>login</button>
                <Link to="/register">don't have a account</Link>
            </div>
            <ToastContainer />
        </>
    )
}