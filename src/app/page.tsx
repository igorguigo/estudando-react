"use client"


import { BoxQuiz } from "@/components/BoxQuiz";
import { imgList } from "@/data/imgList";
import { useState } from "react";

import { quizzes } from "@/data/quizList";


export default function Home() {

  const firstQuiz = quizzes[0];

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      {
        <BoxQuiz id={firstQuiz.id} name={firstQuiz.name} questions={firstQuiz.questions} />
      }
    </main>
  );
}
