
import React, { useState, useEffect } from 'react';
import './App.css';
import EmployeeList from './Components/EmployeeList';
import AddEmployeeModal from './Components/AddEmployeeModal';

function App() {
  const [employees, setEmployees] = useState([]);
  const [showAddModal, setShowAddModal] = useState(false);

  // Load employees from local storage on initial render
  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees'));
    if (storedEmployees) {
      setEmployees(storedEmployees);
    }
  }, []);

  // Update local storage whenever employees change
  useEffect(() => {
    localStorage.setItem('employees', JSON.stringify(employees));
  }, [employees]);

  const handleAddEmployee = (newEmployee) => {
    setEmployees([...employees, newEmployee]);
    setShowAddModal(false);
  };

  const handleDeleteEmployee = (id) => {
    const updatedEmployees = employees.filter((employee) => employee.id !== id);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="bg-white p-8 rounded shadow-md w-full md:w-3/4 lg:w-1/2">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Employee Management System</h1>
          <p className="text-gray-600">Track and manage employee availability</p>
        </div>
        <div className="dashboard">
          <div className="dashboard-overview mb-8">
            <h2 className="text-lg font-semibold">Dashboard Overview</h2>
            <p>Total Employees: {employees.length}</p>
            <p>Available Employees: {employees.filter((employee) => employee.available).length}</p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4" onClick={() => setShowAddModal(true)}>Add Employee</button>
          </div>
          <div className="employee-list">
            <h2 className="text-lg font-semibold">Employee Listing</h2>
            <EmployeeList employees={employees} onDeleteEmployee={handleDeleteEmployee} />
          </div>
        </div>
        {showAddModal && <AddEmployeeModal onAddEmployee={handleAddEmployee} onClose={() => setShowAddModal(false)} />}
      </div>
    </div>
  );
}

export default App;
