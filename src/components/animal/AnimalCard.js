import React from "react"
import "./Animal.css"
import {ReactComponent as DogSVG } from './dog.svg';

export const AnimalCard = ({ animal }) => {
    return (
        <div className="card">
            <div className="card-content">
                <picture>
                    <DogSVG />
                </picture>
                <h3>Name: <span className="card-petname">
                    {animal.name}
                </span></h3>
                <p>Breed: {animal.breed}</p>
            </div>
        </div>
    );
}