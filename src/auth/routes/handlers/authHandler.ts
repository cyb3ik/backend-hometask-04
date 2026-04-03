import { Request, Response } from "express"
import { usersService } from "../../../users/application/users.service"
import { HTTPStatusCode } from "../../../core/utils/status-codes"

export const authHandler = async (req: Request, res: Response) => {
    const credentialsCheckResult = await usersService.checkCredentials(req.body.loginOrEmail, req.body.password)

    if (!credentialsCheckResult) {
        res.sendStatus(HTTPStatusCode.UNAUTHORIZED)
    }

    res.sendStatus(HTTPStatusCode.NO_CONTENT)
}