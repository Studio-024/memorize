import { ICreateCard } from "@/domain/usecases/createCard";
import { IController } from "../contracts/controller";
import { badRequest, HttpRequest, HttpResponse, noContent, genericError} from "../contracts/http";
import { MissingParamError } from "../../domain/err/missingParamError";

export class addCardController implements IController{
    constructor(
        private readonly createCard: ICreateCard
    ){}

    async handle (request: HttpRequest): Promise<HttpResponse> {
        const requiredParans = ['question', 'response', 'timeEnd', 'timeNext']

        for(const param of requiredParans){
            if(!request.body[param]){
                return badRequest(new MissingParamError(param))
            }
        }
        
        try {
            await this.createCard.save(request.body)
            return noContent()
        } catch (error) {
           return genericError(error.response)
        }
        
    }
}