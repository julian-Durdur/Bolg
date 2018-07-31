import express from "express"
import  { articleRouter }  from "./resources/articles"
import { userRouter } from "./resources/users"

export const restRouter = express.Router()

restRouter.use("/articles", articleRouter)
restRouter.use("/users", userRouter)