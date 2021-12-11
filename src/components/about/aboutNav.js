import React from "react";
import { Link } from "react-router-dom"
import "./about.css"
import { Button } from "../globalStyles.js"

export const AboutNav = () => {
    return (
        <>
            <div>
                <br></br>
                {(localStorage.getItem("muirist_id") !== null) ?
                <Link className="nav-link" to="/backpack"><Button>My Backpack</Button></Link>
                :
                null}
                <br></br>
                <Link className="nav-link" to="/"><Button>Home</Button></Link>
            </div>
        </>
    )
}