import { ErrorREST } from "@/domain/err/errorRest";
import { badRequest } from "@/domain/err/helper";
import { ISignupUser } from "@/domain/usecases/signupUser";
import { IAddUserRepository } from "../contracts/addUserRepository";
import { CheckAccountByEmailRepository } from "../contracts/chekAccountByEmail";
import { Hasher } from "../contracts/hasher";
import { IuserViewModel } from "../models/userViewModel";

export class SignupUserService implements ISignupUser {
    constructor(
        private readonly checkAccountByEmail: CheckAccountByEmailRepository,
        private readonly addUser: IAddUserRepository,
        private readonly haser: Hasher
    ){}
    async signup(user: IuserViewModel){
        const emailExists = await this.checkAccountByEmail.checkByEmail(user.email);

        if(emailExists){
            throw new ErrorREST(badRequest('email alredy exists', 'email existis'))
        }
        
        const passwordHashed = await this.haser.hash(user.password)
        await this.addUser.addUser({...user, password: passwordHashed})
    }
}