import { IListCard } from '@/domain/usecases/ListCard'
import { IListCardRepository } from '@/data/contracts/listCardRepository'

export class ListCardService implements IListCard {
    constructor(private readonly listCardRepository: IListCardRepository){}
    async listAll() {
        return await this.listCardRepository.listCard()
    }
}