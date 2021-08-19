export interface ICrypter {
    encrypt: (plaintext: string) => Promise<string>
    decrypt: (ciphertext: string) => Promise<string>
  }