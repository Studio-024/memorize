export interface ICrypter {
    encrypt: (plaintext: encryptPlainText) => Promise<string>
    decrypt: (ciphertext: string) => Promise<decryptResponse>
}

export interface decryptResponse {
    id: number
    name: string
    iat?: number
    exp?: number
}

export interface encryptPlainText {
    id?: number
    name?: string
}