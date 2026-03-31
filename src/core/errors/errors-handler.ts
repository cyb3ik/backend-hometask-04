import { Response } from 'express'
import { HTTPStatusCode } from "../utils/status-codes"
import { createErrorsMessages } from "./errors-utils"
import { NotFoundError } from "./not-found-error"

export const errorsHandler = (e: unknown, res: Response): void => {
    if (e instanceof NotFoundError) {
        res.status(HTTPStatusCode.NOT_FOUND).send(createErrorsMessages(
            [
                {
                    message: e.message,
                    field: 'id'
                }
            ]
        ))
    }
    else {
        res.sendStatus(HTTPStatusCode.INTERNAL_SERVER_ERROR)
    }
}