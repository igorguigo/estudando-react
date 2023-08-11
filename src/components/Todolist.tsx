import { FaCheck } from 'react-icons/fa';
import { tasks } from '@/data/tasks';
import { ItemTodolist } from './ItemTodolist';

export function Todolist() {
  return (
    <div>
        <h1 className="text-2xl text-black font-semibold p-6 rounded-t-3xl bg-white">Lista de tarefas do Igor</h1>
        <ul className="divide-y-2 divide-black">
            {tasks.map((task, index) => 
                <ItemTodolist id={task.id} name={task.name} check={task.check} isLast={tasks.length - 1 === index} />
            )}
        </ul>
    </div>
  )
}
