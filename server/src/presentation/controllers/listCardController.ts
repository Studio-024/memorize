import { IListCard } from "@/domain/usecases/ListCard";
import { IController } from "../contracts/controller";
import { HttpRequest, HttpResponse, ok, serverError } from "../contracts/http";
import { ICardPresetationViewModel } from "../view-models/CardPresetationViewModel";

export class ListCardController implements IController {
    constructor(private readonly listCard: IListCard){}
    
    async handle(): Promise<HttpResponse<ICardPresetationViewModel[]>>{
        try {
            const cards = await this.listCard.listAll()
            return ok(cards)
        } catch (error) {
            return serverError(error)
        }
    }
}