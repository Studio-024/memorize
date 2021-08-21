import { AddCardService } from "@/data/services/addCard";
import { MysqlcardRepository } from "@/infra/repositories/mysqlCardRepository";
import { IController } from "@/presentation/contracts/controller";
import { addCardController } from "@/presentation/controllers/addCardController";
import { repo } from "./mysqlCardRepo";



export const makeAddCardController = (): IController => {

    const addCard = new AddCardService(repo)

    return new addCardController(addCard)
}