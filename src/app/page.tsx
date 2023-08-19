"use client"

import { Img } from "@/components/Img";
import { Table } from "@/components/Table";
import { imgList } from "@/data/imgList";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imgList.map(item => (
            <Img photo={item} onClick={() => alert('teste')} />
          ))}
        </div>
      </section>
    </main>
  );
}
