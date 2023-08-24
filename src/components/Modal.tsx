import React from 'react'

type Props = {
    image: string;
    closeModal: () => void;
}

export function Modal({ image, closeModal }: Props) {
  return (
    <section className="modal absolute top-0 left-0 right-0 bottom-0 p-6 bg-black/90" onClick={closeModal}>
        <div className="flex justify-end text-white">X</div>
        <img src={`/assets/${image}`} alt="" className='max-w-screen max-h-screen' />
    </section>
  )
}
