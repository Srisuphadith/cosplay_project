import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors"
import { jwt } from "@elysiajs/jwt"
import { cookie } from "@elysiajs/cookie"
import { signin, register } from './sql.ts'
const app = new Elysia()
app.use(cookie())
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type"],
  exposeHeaders: ["Set-Cookie"]
}))

app.use(
  jwt({
    name: "jwt",
    secret: "your secret",
  })
)


//Register
app.post("/register", async ({ body, cookie, jwt }) => {
  const res = await register(body.firstname, body.lastname, body.username, body.password, body.email)
  if (!res.success) {
    alert("fail to register")
    return { success: false }
  }
  //create JWT
  const payload = { userId: body.username }
  const token = await jwt.sign(payload)
  //set COOKIE with value:JWT
  cookie.auth.set({
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: 2 * 24 * 60 * 60,
  })
  return { success: true }
}, {
  body: t.Object({
    username: t.String(),
    password: t.String(),
    firstname: t.String(),
    lastname: t.String(),
    email: t.String(),
  })
})


//Login
app.post("/login", async ({ jwt, cookie, body }) => {
  //console.log(body.username)
  const fsql = await signin(body.username, body.password)
  if (fsql.error) {
    console.log("log in fail")
    return { error: "fail" }
  }
  //create JWT
  const payload = { userId: body.username }
  const token = await jwt.sign(payload)
  //set COOKIE with value:JWT
  cookie.auth.set({
    value: token,
    httpOnly: true,
    path: "/",
    maxAge: 2 * 24 * 60 * 60,
  })
  //console.log(cookie.auth.value)
  return { message: "login successfully" }
}, { body: t.Object({ username: t.String(), password: t.String() }) })

//Profile
app.get("/profile", async ({ cookie, jwt }) => {
  //recieve jwt from cookie
  const token = cookie.auth.value
  if (!token) return { error: "Unauthorized" }
  const payload = await jwt.verify(token)
  if (!payload) return { error: "invalid token" }
  //console.log(payload)
  return { "message": `Hello ${payload.userId}` }
})

//Logout
app.get("/logout", ({ cookie }) => {
  cookie.auth.remove()
  return { message: "logout successfully" }
})
app.get("/session_expire", ({ cookie }) => {
  console.log(cookie.auth.expires)
})


app.listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
