import { ICreateCard } from '@/domain/usecases/createCard'
import { IController } from '../contracts/controller'
import { HttpRequest, HttpResponse, errorHandler, created } from '../contracts/http'
import { requiredParams } from '../helper/requireParams'

export class addCardController implements IController {
    constructor(
        private readonly createCard: ICreateCard
    ){}

    async handle (request: HttpRequest): Promise<HttpResponse> {
        const error = requiredParams(['front', 'back'], request)
        if (error) {
            return errorHandler(error.response)
        }
        
        try {
            await this.createCard.save(request.body)
            return created()
        } catch (error: any) {
            return errorHandler(error.response)
        }
    }
}
