import { encryptPlainText, ICrypter } from "@/data/contracts/cryptography/crypter";

import jwt from 'jsonwebtoken'

export class JwtAdapter implements ICrypter {
    constructor(private readonly secret: string){}
    async encrypt (plaintext: encryptPlainText): Promise<string> {
        return jwt.sign({ id: plaintext.id, name: plaintext.name }, this.secret, {expiresIn: "1h"})
      }
    
    async decrypt (ciphertext: string): Promise<string> {
      return jwt.verify(ciphertext, this.secret) as any
    }
}