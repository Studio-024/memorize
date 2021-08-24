import { IUser } from '../entities/user/user'

export interface ISignUpUser {
    signUp(user: IUser): Promise<void>
}