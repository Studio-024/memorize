import { IUserLogin } from "@/domain/entities/userLogin";
import { ISignInUser } from "@/domain/usecases/signInUser";
import { PasswordEncryptedRepository, SignInRepository } from "../contracts/signIn"
import { CheckAccountByEmailRepository } from "../contracts/chekAccountByEmail";
import { Hasher } from "../contracts/hasher";
import { encryptPlainText, ICrypter } from "../contracts/cryptography/crypter";

export class SignInUserService implements ISignInUser {
    constructor (
        private readonly checkAccountByEmail: CheckAccountByEmailRepository,
        private readonly checkCredentials: PasswordEncryptedRepository,
        private readonly signInRepository: SignInRepository,
        private readonly hasher: Hasher,
        private readonly crypter: ICrypter
    ) {}
    async signIn(user: IUserLogin){
        const emailExists = await this.checkAccountByEmail.checkByEmail(user.email)
        
        if (emailExists) {
            const passwordEncrypted = await this.checkCredentials.passwordEncrypted(user)
            const passwordIsCorrect = await this.hasher.compare(user.password, passwordEncrypted)

            if (passwordIsCorrect) {
                const rowUser:encryptPlainText = await this.signInRepository.signIn({email: user.email, password: passwordEncrypted})
                const token = await this.crypter.encrypt(rowUser)

                return token
            } else {
                throw new Error('Password dont match')
            }
        } else {
            throw new Error('Email dont exist')
        }
    }
}