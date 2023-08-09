import { Item } from "./Item";
import { students } from "@/data/students";

export function Table() {
  return (
    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
          <th scope="col" className="px-6 py-3">
            Name
          </th>
          <th scope="col" className="px-6 py-3">
            Status
          </th>
          <th scope="col" className="px-6 py-3">
            Grade 1
          </th>
          <th scope="col" className="px-6 py-3">
            Grade 2 
          </th>
          <th scope="col" className="px-6 py-3">
            Final Grade
          </th>
        </tr>
      </thead>
      <tbody>
        {students.map(student => 
          <Item key={student.id} nome={student.name} email={student.email} avatar={student.avatar} status={student.active} grade1={student.grade1} grade2={student.grade2} />
        )}
      </tbody>
    </table>
  );
}
