import React, { useEffect, useState } from 'react';
import { getAllEmployees } from '../../modules/EmployeeManager';
import { EmployeeCard } from './EmployeeCard';

export const EmployeeList = () => {
    // The initial state is an empty array
    const [employees, setEmployees] = useState([]);

    const getEmployees = () => {
        // After the data comes back from the API, we
        //  use the setEmployees function to update state
        return getAllEmployees().then(employeesFromAPI => {
            setEmployees(employeesFromAPI)
        });
    };

    // got the employees from the API on the component's first render
    useEffect(() => {
        getEmployees();
    }, []);

    // Finally we use .map() to "loop over" the employees array to show a list of employee cards
    return (
        <div className="container-cards">
            {employees.map(employee => <EmployeeCard key={employee.id} employee={employee} />)}
        </div>
    );
};