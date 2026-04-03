import { Router } from "express"
import { authInputValidationMiddleware } from "../validation/authInputValidationMiddleware"
import { inputValidationResultMiddleware } from "../../core/middlewares/validation/inputValidationResultMiddleware"
import { authHandler } from "./handlers/authHandler"


export const authRouter = Router()

authRouter
    .post("/login", authInputValidationMiddleware, inputValidationResultMiddleware, authHandler)