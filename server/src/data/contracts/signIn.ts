import { IUserLogin } from '@/domain/entities/userLogin'

export interface PasswordEncryptedRepository {
    passwordEncrypted: (user: IUserLogin) => Promise<string>
}

export interface SignInRepository {
    signIn: (user: IUserLogin) => Promise<object>
}