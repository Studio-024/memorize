export interface ICrypter {
    encrypt: (plaintext: encryptPlainText) => Promise<string>
    decrypt: (ciphertext: string) => Promise<string>
}

export interface encryptPlainText {
    id: number
    name: string
}