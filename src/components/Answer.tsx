import { Answer } from "@/types/Answer"

type Props = {
    answer: Answer
}

export function Answer({ answer }: Props) {
    return (
        <li className="w-full p-1 border-solid border-2 border-gray-700 rounded-md">{answer.id}</li> 
    )
  }
  