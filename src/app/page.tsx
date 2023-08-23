"use client"

import { Img } from "@/components/Img";
import { Modal } from "@/components/Modal";
import { Table } from "@/components/Table";
import { imgList } from "@/data/imgList";
import { useState } from "react";

export default function Home() {

  const [showModal, setShowModal] = useState(false);
  const [imageModal, setImageModal] = useState('');

  const openModal = (id: number) => {
    const photo = imgList.find(item => item.id === id);
    if(photo){
      setImageModal(photo.url);
      setShowModal(true);
    }

  }

  const closeModal = () => {
    setShowModal(false);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 relative">
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {imgList.map(item => (
            <Img photo={item} onClick={() => openModal(item.id)} />
          ))}
        </div>
      </section>
      {showModal &&
        <Modal image={imageModal} closeModal={closeModal} />
      }
    </main>
  );
}
