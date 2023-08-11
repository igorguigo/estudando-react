import { Task } from '@/types/Task';
import { FaCheck } from 'react-icons/fa';

type Props = Task & {
    isLast: boolean
}

export function ItemTodolist({ id, name, check, isLast }:Props) {
  return (
    <li className={check ? `p-6 bg-green-600 flex items-center justify-between ${isLast ? 'rounded-b-3xl' : ''}` : `p-6 bg-red-600 flex items-center justify-between ${isLast ? 'rounded-b-3xl' : ''}`}>
        <span>{name}</span>
        {check ? <FaCheck /> : ''}
    </li>
  )
}
