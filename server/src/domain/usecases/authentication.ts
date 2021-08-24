export interface IAuthenticationUseCase {
    auth: (token: string) => Promise<boolean>
}