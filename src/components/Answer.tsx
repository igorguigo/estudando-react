import { Answer } from "@/types/Answer"

type Props = {
    answer: Answer,
    onClick: () => void,
    isSelectedAnswer: boolean,
    isCorrectAnswer: boolean
}

export function Answer({ answer, onClick, isSelectedAnswer, isCorrectAnswer }: Props) {
    
    const switchColor = isSelectedAnswer ? (isCorrectAnswer? "bg-green-300 text-black" : "bg-red-300 text-black") : '';

    return (
        <li className={`w-full p-1 border-solid border-2 border-gray-700 rounded-md cursor-pointer ${switchColor}`} onClick={onClick} >{answer.name}</li> 
    )
  }
  