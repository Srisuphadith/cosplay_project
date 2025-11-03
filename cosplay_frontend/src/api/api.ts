export async function login(username: String, password: String) {
    const res = await fetch("http://localhost:3000/login",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "username": username, "password": password}),
            credentials: "include"
        }
    )
    return res
}
export async function register(username: String, password: String,firstname:String,lastname:String,email:String) {
    const res = await fetch("http://localhost:3000/register",
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ "username": username, "password": password,"firstname":firstname,"lastname":lastname,"email":email}),
            credentials: "include"
        }
    )
    return res
}
export async function fetchProfile() {
    const res = await fetch("http://localhost:3000/profile",
        {
            method: "GET",
            credentials: "include"
        }
    )
    return res
}
export async function logout() {
    const res = await fetch("http://localhost:3000/logout",
        {
            method: "GET",
            credentials: "include"
        }
    )
    return res
}