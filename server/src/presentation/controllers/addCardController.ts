import { ICreateCard } from "@/domain/usecases/createCard";
import { IController } from "../contracts/controller";
import { HttpRequest, HttpResponse, noContent, errorHandler} from "../contracts/http";
import { ErrorREST } from "@/domain/err/errorRest";

export class addCardController implements IController{
    constructor(
        private readonly createCard: ICreateCard
    ){}

    async handle (request: HttpRequest): Promise<HttpResponse> {
        const requiredParans = ['question', 'response', 'timeEnd', 'timeNext']

        for(const param of requiredParans){
            if(!request.body[param]){
                const error = new ErrorREST({status: 400, message: `require parameter: '${param}'`, stack: 'undefined'})
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
