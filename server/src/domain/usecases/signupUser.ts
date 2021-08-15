import { IUser } from "../entities/user";

export interface ISignupUser {
    signup(user: IUser): Promise<void>
}