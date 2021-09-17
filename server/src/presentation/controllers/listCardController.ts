import { IListCard } from '@/domain/usecases/ListCard'
import { IController } from '../contracts/controller'
import { errorHandler, HttpResponse, ok } from '../contracts/http'
import { ICardPresetationViewModel } from '../view-models/CardPresetationViewModel'

export class ListCardController implements IController {
    constructor(private readonly listCard: IListCard){}
    
    async handle(): Promise<HttpResponse<ICardPresetationViewModel[]>>{
        try {
            const cards = await this.listCard.listAll()
            return ok(cards)
        } catch (error: any) {
            return errorHandler(error)
        }
    }
}