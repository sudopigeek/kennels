import React, { useEffect, useState } from 'react';
import { getAllLocations } from '../../modules/LocationManager';
import { LocationCard } from './LocationCard';

export const LocationList = () => {
    // The initial state is an empty array
    const [locations, setLocations] = useState([]);

    const getLocations = () => {
        // After the data comes back from the API, we
        //  use the setLocations function to update state
        return getAllLocations().then(locationsFromAPI => {
            setLocations(locationsFromAPI)
        });
    };

    // got the locations from the API on the component's first render
    useEffect(() => {
        getLocations();
    }, []);

    // Finally we use .map() to "loop over" the locations array to show a list of location cards
    return (
        <div className="container-cards">
            {locations.map(location => <LocationCard key={location.id} location={location} />)}
        </div>
    );
};