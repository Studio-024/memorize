import { IAuthenticationUseCase } from '@/domain/usecases/authentication'
import { MysqlcardRepository } from '@/infra/repositories/mysqlCardRepository'
import { ICrypter } from '../../contracts/cryptography/crypter'

export class Authentication implements IAuthenticationUseCase {
    constructor(
        private readonly crypter: ICrypter,
        private cardRepositpry: MysqlcardRepository
    ){}

    async auth(token: string): Promise<boolean> {
        try {
            const compareToken = await this.crypter.decrypt(token)

            this.cardRepositpry.setUserId(compareToken.id)
        
        } catch(err) {
            return false
        }
        
        return true
    }
}