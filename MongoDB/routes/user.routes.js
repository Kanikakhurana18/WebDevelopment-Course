import express, { Router } from "express"
import { create, deleteAll, Home, read, readUser, updateAll, updateID } from "../controllers/user.controller.js"

let userRouter= express(Router())

userRouter.get("/",Home)

userRouter.post("/create",create)

userRouter.get("/read", read)

userRouter.get("/read/:userName", readUser)

userRouter.put("/update/:id", updateID)

userRouter.put("/update/", updateAll)

userRouter.delete("/delete", deleteAll)

export default userRouter