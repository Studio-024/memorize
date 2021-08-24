import { IUserLogin } from '../entities/user/userLogin'

export interface ISignInUser {
    signIn(user: IUserLogin): Promise<string>
}