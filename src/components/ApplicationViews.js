import React, { useState } from "react"
import { Route, Switch } from "react-router-dom"
import { About } from "./about/about.js"
import { Backpack } from "./backpack/backpack.js"
import { HomePage } from "./homepage/homepage.js"
import { Parks } from "./parks/parks.js"
import { NewSnippet } from "./snippets/snippetModal.js"
import { Snippets } from "./snippets/snippets.js"


export const ApplicationViews = () => {

    

        return (
            <> 
                <Route exact path="/">
                    <HomePage />
                </Route>
                <Route exact path="/parks">
                    <Parks />
                </Route>
                <Route exact path="/snippets/:parkId(\d+)">
                    <Snippets /> 
                </Route>
                <Route exact path="/snippets">
                    <Snippets />
                </Route>
                <Route exact path="/backpack">
                    <Backpack />
                </Route>
                <Route exact path="/about">
                    <About />
                </Route>
                <Route exact path="/add-snippet">
                    <NewSnippet />
                </Route>

            </>

        )

    }