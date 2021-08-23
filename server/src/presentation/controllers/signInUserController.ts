import { SignInUserService } from "@/data/services/signInUserService";
import { IUserLogin } from "@/domain/entities/userLogin";
import { IController } from "../contracts/controller";
import { errorHandler, HttpRequest, HttpResponse, ok } from "../contracts/http";
import { requiredParams } from "../helper/requireParams";

export class SignInUserController implements IController {
    constructor(
        private readonly signInUserService: SignInUserService
    ){}

    async handle (request: HttpRequest): Promise<HttpResponse> {
        const error = requiredParams(['email', 'password'], request)
        if (error) {
            return errorHandler(error.response) 
        } 
        
        try {
            const user: IUserLogin = {
                ...request.body
            }            
            const response = {
                statusCode: 200,
                data: await this.signInUserService.signIn(user)
            }
            
            return ok(response)
        } catch (error) {
            return errorHandler(error.response)
        }
    }
}