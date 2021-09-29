import React from "react"
import "./Location.css"

export const LocationCard = ({ location, handleCloseLocation }) => {
    return (
        <section className="location">
            <h3 className="location__name">{location.name}</h3>
            <div className="location__address">{location.address}</div>
            <button type="button" onClick={() => handleCloseLocation(location.id)}>Discharge</button>
        </section>
    );
}