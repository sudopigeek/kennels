import React, { useEffect, useState } from 'react';
import { getAllCustomers, removeCustomer } from '../../modules/CustomerManager';
import { CustomerCard } from './CustomerCard';

export const CustomerList = () => {
    // The initial state is an empty array
    const [customers, setCustomers] = useState([]);

    const getCustomers = () => {
        // After the data comes back from the API, we
        //  use the setCustomers function to update state
        return getAllCustomers().then(customersFromAPI => {
            setCustomers(customersFromAPI)
        });
    };

    const handleRemoveCustomer = id => {
        removeCustomer(id)
        .then(() => getAllCustomers().then(setCustomers));
    };

    // got the customers from the API on the component's first render
    useEffect(() => {
        getCustomers();
    }, []);

    // Finally we use .map() to "loop over" the customers array to show a list of customer cards
    return (
        <div className="container-cards">
            {customers.map(customer => <CustomerCard key={customer.id} customer={customer} handleRemoveCustomer={handleRemoveCustomer} />)}
        </div>
    );
};