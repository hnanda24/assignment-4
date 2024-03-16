
import React, { useState } from 'react';

const AddEmployeeModal = ({ onAddEmployee, onClose }) => {
  const [name, setName] = useState('');
  const [designation, setDesignation] = useState('');
  const [department, setDepartment] = useState('');
  const [age, setAge] = useState('');
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newEmployee = {
      id: Math.random().toString(36).substr(2, 9),
      name,
      designation,
      department,
      age: parseInt(age),
      available,
    };
    onAddEmployee(newEmployee);
    onClose();
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-3/4 lg:w-1/2">
        <div className="flex justify-end">
          <button onClick={onClose} className="text-gray-600">&times;</button>
        </div>
        <h2 className="text-lg font-semibold mb-4">Add Employee</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Designation" value={designation} onChange={(e) => setDesignation(e.target.value)} required className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          <input type="text" placeholder="Department" value={department} onChange={(e) => setDepartment(e.target.value)} required className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          <input type="number" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} required className="block w-full px-4 py-2 mb-4 border border-gray-300 rounded focus:outline-none focus:border-blue-500" />
          <label className="flex items-center mb-4">
            <input type="checkbox" checked={available} onChange={(e) => setAvailable(e.target.checked)} className="form-checkbox h-5 w-5 text-blue-500" />
            <span className="ml-2 text-gray-700">Available</span>
          </label>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddEmployeeModal;
