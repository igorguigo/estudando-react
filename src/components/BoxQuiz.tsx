import { Question } from "./Question"

export function BoxQuiz() {
  return (
        <div className="p-6 bg-slate-900 rounded-xl divide-y">
            <header className="text-lg font-bold mb-3" >Quiz de culinária</header>
            <Question />
        </div>
  )
}
