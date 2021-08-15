import { ErrorREST } from "@/domain/err/errorRest";
import { badRequest } from "@/domain/err/helper";
import { ISignupUser } from "@/domain/usecases/signupUser";
import { CheckAccountByEmailRepository } from "../contracts/chekAccountByEmail";
import { IuserViewModel } from "../models/userViewModel";

export class SignupUserService implements ISignupUser {
    constructor(
        readonly checkAccountByEmail: CheckAccountByEmailRepository
    ){}
    async signup(user: IuserViewModel){
        // tornar password hash
        const emailexists = await this.checkAccountByEmail.checkByEmail(user.email);

        if(emailexists){
            throw new ErrorREST(badRequest('email alredy exists', 'email existis'))
        }
        
    }
}