import { SignupUserService } from "@/data/services/signupUserService"
import { IUser } from "@/domain/entities/user"
import { IController } from "../contracts/controller"
import { errorHandler, HttpRequest, HttpResponse, noContent } from "../contracts/http"
import { requiredParams } from "../helper/requireParams"

export class SignupUserController implements IController{
    constructor(
        private readonly signupUserService: SignupUserService
    ){}

    async handle (request: HttpRequest): Promise<HttpResponse> {
        const error = requiredParams(['name', 'email', 'password'], request)

        if (error) {
            return errorHandler(error.response) 
        } 

        try {
            const user: IUser = {
                ...request.body
            }
            await this.signupUserService.signup(user)

            return noContent()
        } catch (error) {
            return errorHandler(error.response)
        }
    }
}