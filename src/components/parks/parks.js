import React from "react";
import { Link } from "react-router-dom"
import "./parks.css"

export const Parks = () => {
    return (
        <>
            <div>
                <header>National Parks</header>
                <ul>
                    <li>A list of parks will go here
                    </li>
                    <li><Link className="nav-link" to="/snippets"><button>This Will Be a Park Name</button></Link>
                    </li></ul>
                <Link className="nav-link" to="/backpack"><button>My Backpack</button></Link>
                <Link className="nav-link" to="/about"><button>About</button></Link>
            </div>
        </>
    )
}