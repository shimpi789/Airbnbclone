import express from "express"
import { logOut, login, signUp } from "../controller/auth.controller.js"

const authRouter = express.Router()

authRouter.post("/signup",signUp)
authRouter.post("/login",login)
authRouter.post("/logout",logOut)
export default authRouter