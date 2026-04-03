import { WithId } from "mongodb"
import { RawUser, UserOutputModel } from "./userTypes"

export const mapUserToOutput = (dto: WithId<RawUser>): UserOutputModel => {
    return {
        id: dto._id.toString(),
        login: dto.login,
        email: dto.email,
        createdAt: dto.createdAt
    }
}