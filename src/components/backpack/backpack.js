import React from "react";
import { Link } from "react-router-dom"
import "./backpack.css"

export const Backpack = () => {
    return (
        <>
            <div>
                Placeholder Backpack
                <Link className="nav-link" to="/about"><button>About</button></Link>
                <Link className="nav-link" to="/"><button>Home</button></Link>
            </div>
        </>
    )
}
