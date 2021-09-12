import { signUpUserService } from '@/data/services/user/signUpUserService'
import { IUser } from '@/domain/entities/user/user'
import { IController } from '../contracts/controller'
import { created, errorHandler, HttpRequest, HttpResponse} from '../contracts/http'
import { requiredParams } from '../helper/requireParams'

export class signUpUserController implements IController {
    constructor(
        private readonly signUpUserService: signUpUserService
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
            await this.signUpUserService.signUp(user)

            return created()
        } catch (error: any) {
            return errorHandler(error.response)
        }
    }
}