import { ErrorREST  } from '@/domain/err/errorRest'
import { badRequest, serverError } from '@/domain/err/helper'
import { ICreateCard } from '@/domain/usecases/createCard'
import { IAddCardRepository } from '../../contracts/card/addCardRepository'
import { ICardViewModel } from '../../models/cardViewModel'

export class AddCardService implements ICreateCard {
    constructor(private readonly addCardRepository: IAddCardRepository) {
    }

    async save(card: ICardViewModel) {

        // if(card.timeNext <= card.timeEnd){
            // throw new ErrorREST(badRequest('the 'timeEnd' cannot be bigger than 'timeNext'', 'error'))
        // }

        try {
            await this.addCardRepository.addCard(card)
        } catch (error) {
            throw new ErrorREST(serverError(error.stack))
        }
    }
}