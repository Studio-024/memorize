import { SignInUserService } from "@/data/services/signInUserService";
import { BcryptAdapter } from "@/infra/cryptography/bycriptAdapter";
import { JwtAdapter } from "@/infra/cryptography/jwtAdapter";
import { MysqlAccontRepository } from "@/infra/repositories/mysqlAccountRepository";
import { IController } from "@/presentation/contracts/controller";
import { SignInUserController } from "@/presentation/controllers/signInUserController";

export const makeSignInUserController = (): IController => {
    const repo = new MysqlAccontRepository()

    const hash = new BcryptAdapter(10)

    const jwt = new JwtAdapter(process.env.JWT_KEY!)

    const signInUser = new SignInUserService(repo, repo, repo, hash, jwt)
    
    return new SignInUserController(signInUser)
}