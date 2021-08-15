import { SignupUserService } from "@/data/services/signupUserService"
import { IUser } from "@/domain/entities/user"
import { IController } from "../contracts/controller"
import { errorHandler, HttpRequest, HttpResponse, noContent } from "../contracts/http"

export class SignupUserController implements IController{
    constructor(
        private readonly signupUserService: SignupUserService
    ){}

    async handle (request: HttpRequest): Promise<HttpResponse> {
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