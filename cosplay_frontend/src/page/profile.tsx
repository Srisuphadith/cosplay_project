import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { fetchProfile, logout } from "../api/api"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Profile() {
    const navigate = useNavigate()
    //const name
    useEffect(() => {
        (async () => {
            const res = await fetchProfile()
            const data = await res.json()
            
            if (data.error) {
                navigate("/")
            }
            if (data.message) {
                toast("Login successfully")
                document.getElementById("name")!.innerText = data.message
                //console.log(data)
            }


        })();
    })

    async function getout() {
        const res = await logout()
        if (res.ok) {
            navigate("/")
        }
    }

    return (
        <>
            <div style={{ display: "grid" }}>
                <h1 id="name">Profile</h1>
                <button id="out" onClick={getout}>Log out </button>
            </div>
            <ToastContainer />
        </>
    )
}