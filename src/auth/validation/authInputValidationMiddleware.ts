import { body } from "express-validator";

const loginOrEmailValidation = 
    body('loginOrEmail')
    .isString().withMessage('Field must be a string')
    .trim()
    .notEmpty().withMessage('Field should not be empty string')

const passwordValidation = 
    body('password')
    .isString().withMessage('Description must be a string')
    .trim()

export const authInputValidationMiddleware = [
    loginOrEmailValidation,
    passwordValidation
]