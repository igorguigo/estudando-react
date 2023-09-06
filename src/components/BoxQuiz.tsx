import { Quiz } from "@/types/Quiz"
import { Question } from "./Question"

export function BoxQuiz({ id, name, questions }: Quiz) {
  return (
        <div className="p-6 bg-slate-900 rounded-xl divide-y">
            <header className="text-lg font-bold mb-3" >{ name }</header>
            {
              // questions.map((element) => (
              //   <Question id={element.id} name={element.name} answer={element.answer} rightAnswer={element.rightAnswer} />
              // ))
              <Question id={questions[0].id} name={questions[0].name} answer={questions[0].answer} rightAnswer={questions[0].rightAnswer} />
            }
        </div>
  )
}
