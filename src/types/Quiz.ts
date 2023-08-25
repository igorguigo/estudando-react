import { Answer } from "./Answer";
import { Question } from "./Question";

export type Quiz = {
    id: number,
    name: string,
    questions: Question[]
}


