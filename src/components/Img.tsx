import { Imgs } from "@/types/Imgs";

type Props = {
    photo: Imgs;
    onClick: () => void;
}

export function Img({ photo, onClick }: Props) {
  return (
    <div onClick={onClick} className='h-60 cursor-pointer hover:opacity-80'>
        <img src={`/assets/${photo.url}`} className='w-full h-full' alt="" />
    </div>
  )
}
