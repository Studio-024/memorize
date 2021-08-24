import { signUpUserService } from '@/data/services/user/signUpUserService'
import { BcryptAdapter } from '@/infra/cryptography/bycriptAdapter'
import { MysqlAccontRepository } from '@/infra/repositories/mysqlAccountRepository'
import { IController } from '@/presentation/contracts/controller'
import { signUpUserController } from '@/presentation/controllers/signUpUserController'

export const makesignUpUserController = (): IController => {
    
    const repo = new MysqlAccontRepository()

    const hash = new BcryptAdapter(10)

    const signUpUser = new signUpUserService(repo, repo, hash)

    return new signUpUserController(signUpUser)
}