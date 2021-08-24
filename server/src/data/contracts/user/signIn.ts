import { IUserLogin } from '@/domain/entities/user/userLogin'

export interface PasswordEncryptedRepository {
    passwordEncrypted: (user: IUserLogin) => Promise<string>
}

export interface SignInRepository {
    signIn: (user: IUserLogin) => Promise<object>
}