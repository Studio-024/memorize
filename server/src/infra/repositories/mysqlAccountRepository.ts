import { IAddUserRepository } from '@/data/contracts/user/addUserRepository'
import { PasswordEncryptedRepository, SignInRepository } from '@/data/contracts/user/signIn'
import { CheckAccountByEmailRepository } from '@/data/contracts/user/chekAccountByEmail'
import { RowDataPacket } from 'mysql2'
import { IUserMysqlViewModel } from '../models/userMysqlViewModel'
import { pool } from '../mysqlPoolConnection'
import { IUserLogin } from '@/domain/entities/user/userLogin'

export class MysqlAccontRepository implements
    CheckAccountByEmailRepository,
    IAddUserRepository,
    PasswordEncryptedRepository,
    SignInRepository {
    constructor(){}

    async checkByEmail(email: string): Promise<CheckAccountByEmailRepository.Result> {
        const emailQuery = await pool.query<RowDataPacket[]>(`SELECT * FROM users WHERE email= '${email}' `)

        if (emailQuery[0].length !== 0) {
            return true
        } else {
            return false
        }
    }
    async addUser(user: IUserMysqlViewModel) {
        try {
            await pool.query(`INSERT INTO users SET ?`, user)
        } catch (error: any) {
            throw new Error(error.stack)
        }
    }
    async passwordEncrypted(user: IUserLogin): Promise<string> {
        try {
            const userQuery = await pool.query<RowDataPacket[]>(`SELECT * FROM users WHERE email= '${user.email}' `)

            return userQuery[0][0].password
        } catch(error: any) {
            throw new Error(error)
        }
    }
    async signIn(user: IUserLogin): Promise<object> {
        const userQuery = await pool.query<RowDataPacket[]>(`SELECT * FROM users WHERE email= '${user.email}' AND password= '${user.password}' `)
        
        return userQuery[0][0]
    }
}