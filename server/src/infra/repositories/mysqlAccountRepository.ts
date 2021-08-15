import { IAddUserRepository } from "@/data/contracts/addUserRepository";
import { CheckAccountByEmailRepository } from "@/data/contracts/chekAccountByEmail";
import { RowDataPacket } from "mysql2";
import { IUserMysqlViewModel } from "../models/userMysqlViewModel";
import { pool } from "../mysqlPoolConnection";

export class MysqlAccontRepository implements CheckAccountByEmailRepository, IAddUserRepository{
    constructor(){}

    async checkByEmail(email: string): Promise<CheckAccountByEmailRepository.Result>{
        const emailQuery = await pool.query<RowDataPacket[]>(`SELECT * FROM users WHERE email= '${email}' `)

        if(emailQuery[0].length !== 0){
            return true
        }else{
            return false
        }
    }
    async addUser(user: IUserMysqlViewModel){
        try {
            await pool.query(`INSERT INTO users SET ?`, user)
        } catch (error) {
            throw new Error(error.stack);
        }
    }
}