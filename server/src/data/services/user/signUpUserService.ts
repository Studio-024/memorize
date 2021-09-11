import { ErrorREST } from '@/domain/err/errorRest'
import { badRequest } from '@/domain/err/helper'
import { ISignUpUser } from '@/domain/usecases/signUpUser'
import { IAddUserRepository } from '../../contracts/user/addUserRepository'
import { CheckAccountByEmailRepository } from '../../contracts/user/chekAccountByEmail'
import { Hasher } from '../../contracts/cryptography/hasher'
import { IUserViewModel } from '../../models/userViewModel'

export class signUpUserService implements ISignUpUser {
    constructor(
        private readonly checkAccountByEmail: CheckAccountByEmailRepository,
        private readonly addUser: IAddUserRepository,
        private readonly haser: Hasher
    ){}
    async signUp(user: IUserViewModel) {
            const emailExists = await this.checkAccountByEmail.checkByEmail(user.email)

            if (emailExists) {
                throw new ErrorREST(badRequest('email alredy exists'))
            }

            try {
                const passwordHashed = await this.haser.hash(user.password)
                await this.addUser.addUser({...user, password: passwordHashed})
            } catch (error: any) {
                throw new ErrorREST(error.stack)
            }
    }
}