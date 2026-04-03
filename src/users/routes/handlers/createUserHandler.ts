import { Request, Response } from "express"
import { HTTPStatusCode } from "../../../core/utils/status-codes"
import { WithId } from "mongodb"
import { errorsHandler } from "../../../core/errors/errors-handler"
import { usersService } from "../../application/users.service"
import { RawUser } from "../../models/userTypes"
import { mapUserToOutput } from "../../models/mapUserToOutput"

export const createUser = async (req: Request, res: Response) => {
    try {
        const createdUserId: string = await usersService.create(req.body)

        const insertedUserWithId: WithId<RawUser> = await usersService.findUser(createdUserId)

        const newUserOutput = mapUserToOutput(insertedUserWithId)

        res.status(HTTPStatusCode.CREATED).send(newUserOutput)
    }

    catch(e: unknown) {
        errorsHandler(e, res)
    }
}