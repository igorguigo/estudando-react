import { Answer as AnswerType } from "@/types/Answer";
import { Answer } from "./Answer";

import { Imgs } from "@/types/Imgs";
import { Question } from "@/types/Question";
import { useState } from "react"

    

export function Question({id, name, answer, rightAnswer} :Question) {
    const [isCorrect, setCorrect] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);

    const checkCorrectAnswer = (elementId: number) => {
        setSelectedAnswer(elementId);
        setCorrect(elementId === rightAnswer);
    }

    return (
        <div className="">
            <h1 className="text-2xl font-bold pt-2 mb-4">{ name }</h1>
            <ul className="space-y-3">
            {
                answer.map((element) => (
                    <Answer
                        key={element.id}
                        answer={element}
                        onClick={() => checkCorrectAnswer(element.id)}
                        isSelectedAnswer={element.id === selectedAnswer}
                        isCorrectAnswer={isCorrect}
                    />
                ))
            }
            </ul>
        </div>
    )
  }
  