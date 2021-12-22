import React from "react";
import { Link } from "react-router-dom"
import "./about.css"
import { Button, Content } from "../globalStyles.js"

export const AboutNav = () => {
    return (
        <>
            <div>
                <br></br>
                {(localStorage.getItem("muirist_id") !== null) ?
                <Link className="nav-link" to="/backpack"><Content><Button>My Backpack</Button></Content></Link>
                :
                null}
                <br></br>
                <Link className="nav-link" to="/"><Content><Button>Home</Button></Content></Link>
            </div>
        </>
    )
}