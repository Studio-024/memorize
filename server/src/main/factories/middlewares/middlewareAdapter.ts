import { Authentication } from "@/data/services/authentication"
import { JwtAdapter } from "@/infra/cryptography/jwtAdapter"
import { AuthMiddleware } from "@/presentation/middlewares/authMiddleware"

import { repo } from "../mysqlCardRepo"

export const makeAuthMiddleware = () => {

    const crypto = new JwtAdapter(process.env.JWT_KEY!)

    const auth = new Authentication(crypto, repo)

    return  new AuthMiddleware(auth)
}