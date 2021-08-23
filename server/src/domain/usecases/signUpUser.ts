import { IUser } from '../entities/user'

export interface ISignUpUser {
    signUp(user: IUser): Promise<void>
}