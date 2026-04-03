import { WithId } from "mongodb";
import { PaginationUserQuery, RawUser, UserInputModel } from "../models/userTypes";
import { usersRepository } from "../repositories/usersRepository";
import bcrypt from "bcrypt"
import { NotFoundError } from "../../core/errors/not-found-error";

export const usersService = {

    async findAll(query: PaginationUserQuery): Promise<{totalCount: number, items: WithId<RawUser>[]}> {
        return usersRepository.findAllUsers(query)
    },

    async findUser(id: string): Promise<WithId<RawUser>> {
        return usersRepository.findUserById(id)
    },

    async create(body: UserInputModel): Promise<string> {
        await usersRepository.checkIfLoginOrEmailIsUnique(body.login, body.email)

        const passwordSalt = await bcrypt.genSalt(10)
        const passwordHash = await bcrypt.hash(body.password, passwordSalt)

        const newUser: RawUser = {
            login: body.login,
            email: body.email,
            createdAt: new Date().toISOString(),
            passwordSalt: passwordSalt,
            passwordHash: passwordHash
        }

        return await usersRepository.createUser(newUser)
    },

    async delete(id: string): Promise<void> {
        await usersRepository.deleteUser(id)
        return
    },

    async checkCredentials(loginOrEmail: string, password: string): Promise<boolean> {
        const user = await usersRepository.findByLoginOrEmail(loginOrEmail)

        if (!user) {
            return false
        }

        if (user.passwordHash !== await bcrypt.hash(password, user.passwordSalt)) {
            return false
        }

        return true
    }
}