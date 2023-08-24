"use client"


import { imgList } from "@/data/imgList";
import { useState } from "react";

export default function Home() {

  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
      <div className="p-6 bg-slate-900 rounded-xl divide-y">
        <header className="text-lg font-bold mb-3" >Quiz de culinária</header>
        <div className="">
          <h1 className="text-2xl font-bold pt-2 mb-4">1 - Qual ingrediente não pode faltar?</h1>
          <ul className="space-y-3">
            <li className="w-full p-1 border-solid border-2 border-gray-700 rounded-md">Farinha</li>
            <li className="w-full p-1 border-solid border-2 border-gray-700 rounded-md">Corante</li>
            <li className="w-full p-1 border-solid border-2 border-gray-700 rounded-md">Água</li>
            <li className="w-full p-1 border-solid border-2 border-gray-700 rounded-md">Açúcar</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
