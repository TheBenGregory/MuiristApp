import React from "react"
import { Route } from "react-router-dom"
import { HomePage } from "./components/homepage/homepage.js"


export const ApplicationViews = () => {
    return (
    <>
        <Route path="/">
            <HomePage />
        </Route>
       
    </>
    )
}