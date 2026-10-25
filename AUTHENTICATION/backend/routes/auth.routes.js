import express, { Router } from "express"
import { getUserData, login, logout, signUp } from "../controllers/auth.js"
import { upload } from "../middlewares/multer.js"
import { checkAuth } from "../middlewares/checkAuth.js"

const authRouter= express.Router()
authRouter.post("/signup",upload.single("profileImage"),signUp)
authRouter.post("/login", login)
authRouter.post("/logout", logout)
authRouter.get("/getUserData", checkAuth,getUserData)

export default authRouter