import React from "react";
import { Link } from "react-router-dom"
import { Button, Header, Content } from "../globalStyles.js"
import "./homepage.css"


export const HomePage = () => {
    return (
        <>
        <div>
            <Header>Muirist</Header>
            <Link className="nav-link" to="/parks"><Content><Button>Explore the Parks</Button></Content></Link>
            </div>
        </>
    )
}

