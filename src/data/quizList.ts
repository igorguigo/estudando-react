import { Answer } from "@/types/Answer";
import { Question } from "@/types/Question";
import { Quiz } from "@/types/Quiz";


// Crie algumas respostas
export const answers: Answer[] = [
  { id: 1, name: "Resposta A" },
  { id: 2, name: "Resposta B" },
  { id: 3, name: "Resposta C" },
  { id: 4, name: "Resposta D" },
];

// Crie algumas perguntas com as respostas correspondentes
export const questions: Question[] = [
  {
    id: 1,
    name: "Qual é a capital do Brasil?",
    answer: [answers[0], answers[1], answers[2], answers[3]],
    rightAnswer: 1, // O índice da resposta correta (começando em 0)
  },
  {
    id: 2,
    name: "Qual é o maior planeta do nosso sistema solar?",
    answer: [answers[0], answers[1], answers[2], answers[3]],
    rightAnswer: 2,
  },
//   {
//     id: 3,
//     name: "Quem escreveu 'Romeu e Julieta'?",
//     answer: [answers[0], answers[1], answers[2], answers[3]],
//     rightAnswer: 0,
//   },
];

// Crie os quizzes com as perguntas correspondentes
export const quizzes: Quiz[] = [
  {
    id: 1,
    name: "Quiz de Geografia",
    questions: [questions[0], questions[1]],
  },
//   {
//     id: 2,
//     name: "Quiz de Ciências",
//     questions: [questions[1], questions[2]],
//   },
//   {
//     id: 3,
//     name: "Quiz de Literatura",
//     questions: [questions[2], questions[0]],
//   },
];

// Agora, você tem um array de quizzes onde cada quiz contém perguntas que, por sua vez, contêm respostas correspondentes.
