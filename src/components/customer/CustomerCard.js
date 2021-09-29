import React from "react"
import "./Customer.css"

export const CustomerCard = ({ customer, handleRemoveCustomer }) => {
    return (
        <section className="customer">
            <h3 className="customer__name">{customer.name}</h3>
            <div className="customer__location">{customer.address}</div>
            <button type="button" onClick={() => handleRemoveCustomer(customer.id)}>Remove</button>
        </section>
    );
}