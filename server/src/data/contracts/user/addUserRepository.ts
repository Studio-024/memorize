import { IUserViewModel } from '../../models/userViewModel'

export interface IAddUserRepository {
    addUser(user: IUserViewModel): Promise<void>
}