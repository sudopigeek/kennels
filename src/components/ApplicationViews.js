import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { DateCard } from "./DateCard"
import { AnimalList } from './animal/AnimalList'
import { AnimalDetail } from "./animal/AnimalDetail"
import { CustomerList } from "./customer/CustomerList"
import { EmployeeList } from "./employee/EmployeeList"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"
import { QuoteList } from "./QuoteList"

export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
                <DateCard />
                <QuoteList />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route exact path="/animals">
              <AnimalList />
            </Route>

            <Route path="/animals/:animalId(\d+)">
              <AnimalDetail />
            </Route>

            <Route exact path="/locations">
              <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)">
              <LocationDetail />
            </Route>

            <Route path="/customers">
              <CustomerList />
            </Route>

            <Route path="/employees">
              <EmployeeList />
            </Route>
        </>
    )
}