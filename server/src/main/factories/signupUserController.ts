import { SignupUserService } from "@/data/services/signupUserService";
import { MysqlAccontRepository } from "@/infra/repositories/mysqlAccountRepository";
import { IController } from "@/presentation/contracts/controller";
import { SignupUserController } from "@/presentation/controllers/signupUserController";



export const makeSignupUserController = (): IController => {
    const repo = new MysqlAccontRepository()

    const signupUser = new SignupUserService(repo)

    return new SignupUserController(signupUser)
}