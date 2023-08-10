type Props = {
    nome: string,
    email: string,
    avatar: string,
    status: boolean,
    grade1: number,
    grade2: number,
}

export function Item({ nome, email, avatar, status, grade1, grade2 }: Props) {
  return (
    <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
      >
        <div className="flex gap-x-4">
          <img className="w-12 h-12 rounded-full" src={avatar} alt="" />
          <div className="text">
            <span className="block">{nome}</span>
            <span className="block">{email}</span>
          </div>
        </div>
      </th>
      <td className="px-6 py-4">
        {status == true &&
          <span className="p-4 rounded-xl text-white font-bold bg-green-600">
            Ativo
          </span>
        }
        {status == false &&
          <span className="p-4 rounded-xl text-white font-bold bg-red-700">
            Inativo
          </span>
        }
      </td>
      <td className="px-6 py-4">{grade1}</td>
      <td className="px-6 py-4">{grade2}</td>

      <td className="px-6 py-4">
        {status == true &&
          ((grade1 + grade2)/2).toFixed(2) 
        }
        {status == false &&
          '--'
        }
      </td>
    </tr>
  );
}
