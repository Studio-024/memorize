import { CheckAccountByEmailRepository } from "@/data/contracts/chekAccountByEmail";
import { RowDataPacket } from "mysql2";
import { pool } from "../mysqlPoolConnection";

export class MysqlAccontRepository implements CheckAccountByEmailRepository{
    constructor(){}

    async checkByEmail(email: string): Promise<CheckAccountByEmailRepository.Result>{
        const emailQuery = await pool.query<RowDataPacket[]>(`SELECT * FROM users WHERE email= '${email}' `)

        if(emailQuery[0].length !== 0){
            return true
        }else{
            return false
        }
    }
}