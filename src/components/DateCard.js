import React from "react"
import {GetCurrentDate} from './DateConverter'

export const DateCard = () => (
    <section className="date">
        <h3 className="date__value">Today's date: {GetCurrentDate()}</h3>
    </section>
)