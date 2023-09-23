import { Question } from '@/types/Question';
import React from 'react'

type Props = {
    questions: Question[];
    answers: number[];
}

export function Results({ questions, answers }: Props) {
  return (
    <div className='space-y-5'>
        {   
            questions.map((item, index) => (
                <div key={index}>
                    <p className='font-bold'>{index + 1}. {item.question}</p>
                    <p>{item.answer === answers[index] ? "Acertou" : "Errou"} - {item.options[item.answer]}</p>
                </div>
                )
            )
        }
    </div>
  )
}
