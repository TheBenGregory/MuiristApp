import React from "react";
import { Link } from "react-router-dom"
import { Button } from "../globalStyles.js"
import "./homepage.css"

export const HomePage = () => {
    return (
        <>
        <div>
            <header>Muirist</header>
            <Link className="nav-link" to="/parks"><Button>Explore the Parks</Button></Link>
            </div>
        </>
    )
}

