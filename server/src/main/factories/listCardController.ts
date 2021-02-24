import { ListCardService } from "@/data/services/listAllCard";
import { ListCardRepository } from "@/infra/repositories/mysqlListCardRepository";
import { IController } from "@/presentation/contracts/controller";
import { ListCardController } from "@/presentation/controllers/listCardController";

export const makeListCardController = (): IController => {
    const repo = new ListCardRepository()

    const list = new ListCardService(repo)

    return new ListCardController(list)
}