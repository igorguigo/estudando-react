import { Answer } from "./Answer";

export function Question() {
    return (
        <div className="">
            <h1 className="text-2xl font-bold pt-2 mb-4">1 - Qual ingrediente não pode faltar?</h1>
            <ul className="space-y-3">
                <Answer />
            </ul>
        </div>
    )
  }
  