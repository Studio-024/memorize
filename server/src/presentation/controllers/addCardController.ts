import { ICreateCard } from "@/domain/usecases/createCard";
import { IController } from "../contracts/controller";
import { HttpRequest, HttpResponse, noContent, errorHandler} from "../contracts/http";
import { ErrorREST } from "@/domain/err/errorRest";
import { missingParamError } from "@/domain/err/helper";

export class addCardController implements IController{
    constructor(
        private readonly createCard: ICreateCard
    ){}

    async handle (request: HttpRequest): Promise<HttpResponse> {
        const requiredParans = ['question', 'response']

        for(const param of requiredParans){
            if(!request.body[param]){
                const error = new ErrorREST(missingParamError(param))
                return errorHandler(error.response)
            }
        }
        
        try {
            await this.createCard.save(request.body)
            return noContent()
        } catch (error) {
            return errorHandler(error.response)
        }
    }
}
