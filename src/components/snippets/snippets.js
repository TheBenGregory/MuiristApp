import React from "react";
import { Link } from "react-router-dom"
import "./snippets.css"

export const Snippets = () => {
    return (
        <>  
            <div>
                <header>National Parks</header>
                <ul>
                    <li>A list of snippets will go here
                    </li>
                    <li><Link className="nav-link" to="/parks">This will be a snippet</Link>
                    </li>
                </ul>
                <Link className="nav-link" to="/backpack"><button>My Backpack</button></Link>
                <Link className="nav-link" to="/about"><button>About</button></Link>
            </div>
        </>
    )
}