import { ListCardService } from '@/data/services/card/listAllCard'
import { IController } from '@/presentation/contracts/controller'
import { ListCardController } from '@/presentation/controllers/listCardController'
import { repo } from './mysqlCardRepo'

export const makeListCardController = (): IController => {

    const list = new ListCardService(repo)

    return new ListCardController(list)
}