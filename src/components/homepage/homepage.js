import React from "react";
import { Link } from "react-router-dom"
import "./homepage.css"

export const HomePage = () => {
    return (
        <>
        <div>
            <header>Muirist</header>
            <Link className="nav-link" to="/backpack"><button>My Backpack</button></Link>
            <Link className="nav-link" to="/parks"><button>Explore the Parks</button></Link>
            <Link className="nav-link" to="/about"><button>About</button></Link>
            </div>
        </>
    )
}

