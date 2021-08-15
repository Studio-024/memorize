import { IuserViewModel } from "../models/userViewModel";

export interface IAddUserRepository {
    addUser(user: IuserViewModel): Promise<void>
}