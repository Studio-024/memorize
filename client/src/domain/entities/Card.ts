export type ICard = {
    cod: number,
    front: string,
    back: string,
    streak?: number,
    interval_time?: number,
    revision_date?: Date
    review_cod: number

}

export interface ICardUser {
    front: string
    back: string
}