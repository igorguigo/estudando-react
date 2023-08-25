import { Answer } from "./Answer"

export type Question = {
    id: number,
    name: string,
    answer: Answer[],
    rightAnswer: number
}