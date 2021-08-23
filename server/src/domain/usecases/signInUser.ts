import { IUserLogin } from '../entities/userLogin'

export interface ISignInUser {
    signIn(user: IUserLogin): Promise<string>
}