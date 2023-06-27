import React, { useEffect, useState } from 'react'
import { getAllEmployee } from '../api/employee';
import Employee from './Employee';
const EmployeeList = () => {
    const [employees, setEmployees] = useState([]);

    const getEmployeesData = async () => {
        const getEmployees = await getAllEmployee();
        setEmployees(getEmployees.results);
    }

    useEffect(() => {
        getEmployeesData();
    }, []);

    
    return (
        <div className='card-container'>
            {employees.map((employee) => <Employee key={employee.email} employee={employee} />)}
        </div>
    )
}

export default EmployeeList