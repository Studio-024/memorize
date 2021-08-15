import { SignupUserService } from "@/data/services/signupUserService";
import { BcryptAdapter } from "@/infra/cryptography/bycriptAdapter";
import { MysqlAccontRepository } from "@/infra/repositories/mysqlAccountRepository";
import { IController } from "@/presentation/contracts/controller";
import { SignupUserController } from "@/presentation/controllers/signupUserController";



export const makeSignupUserController = (): IController => {
    const repo = new MysqlAccontRepository()

    const hash = new BcryptAdapter(10)

    const signupUser = new SignupUserService(repo, repo, hash)

    return new SignupUserController(signupUser)
}