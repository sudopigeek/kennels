import React from "react"
import "./Employee.css"

export const EmployeeCard = ({ employee, handleTerminateEmployee }) => {
    return (
        <section className="employee">
            <h3 className="employee__name">{employee.name}</h3>
            <div className="employee__location">{employee.location}</div>
            <button type="button" onClick={() => handleTerminateEmployee(employee.id)}>Terminate</button>
        </section>
    );
}