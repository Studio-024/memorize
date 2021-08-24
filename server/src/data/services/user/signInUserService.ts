import { IUserLogin } from '@/domain/entities/user/userLogin'
import { ISignInUser } from '@/domain/usecases/signInUser'
import { PasswordEncryptedRepository, SignInRepository } from '../../contracts/user/signIn'
import { CheckAccountByEmailRepository } from '../../contracts/user/chekAccountByEmail'
import { encryptPlainText, ICrypter } from '../../contracts/cryptography/crypter'
import { Hasher } from '../../contracts/cryptography/hasher'
import { ErrorREST } from '@/domain/err/errorRest'
import { badRequest } from '@/domain/err/helper'

export class SignInUserService implements ISignInUser {
    constructor (
        private readonly checkAccountByEmail: CheckAccountByEmailRepository,
        private readonly checkCredentials: PasswordEncryptedRepository,
        private readonly signInRepository: SignInRepository,
        private readonly hasher: Hasher,
        private readonly crypter: ICrypter
    ) {}

    async signIn(user: IUserLogin) {
        const emailExists = await this.checkAccountByEmail.checkByEmail(user.email)

        if (!emailExists)  throw new ErrorREST(badRequest('email does not'))
            
        const passwordEncrypted = await this.checkCredentials.passwordEncrypted(user)
        const passwordIsCorrect = await this.hasher.compare(user.password, passwordEncrypted)

        if (!passwordIsCorrect) throw new ErrorREST(badRequest('password does not match'))
            
        const rowUser:encryptPlainText = await this.signInRepository.signIn(
            {
                email: user.email, 
                password: passwordEncrypted
            }
        )
        const token = await this.crypter.encrypt(rowUser)

        return token
    }
}