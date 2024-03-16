
import React from 'react';

const EmployeeList = ({ employees, onDeleteEmployee }) => {
  return (
    <table className="w-full table-auto">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4">Name</th>
          <th className="py-2 px-4">Designation</th>
          <th className="py-2 px-4">Department</th>
          <th className="py-2 px-4">Age</th>
          <th className="py-2 px-4">Available</th>
          <th className="py-2 px-4">Action</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee) => (
          <tr key={employee.id} className="border-b border-gray-200">
            <td className="py-2 px-4">{employee.name}</td>
            <td className="py-2 px-4">{employee.designation}</td>
            <td className="py-2 px-4">{employee.department}</td>
            <td className="py-2 px-4">{employee.age}</td>
            <td className="py-2 px-4">{employee.available ? 'Yes' : 'No'}</td>
            <td className="py-2 px-4">
              <button className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600 transition duration-300">Edit</button>
              <button className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition duration-300" onClick={() => onDeleteEmployee(employee.id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default EmployeeList;
