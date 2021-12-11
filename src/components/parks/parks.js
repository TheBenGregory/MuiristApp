import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./parks.css"
import { getAllParks } from '../apiManager.js'

export const Parks = () => {

    const [parks, setParks] = useState([])

    useEffect(() => {
        getAllParks()
        .then((data) => {
            setParks(data)
        })
        }, [])

    return (
        <>
            <div>
                <header>National Parks</header>
                <ul>
                    <li>A list of parks will go here
                    </li>
                    <li>{
                    parks.map(park => <option value={park.id}>{park.name}</option>)
                }
                    </li></ul>
                <Link className="nav-link" to="/backpack"><button>My Backpack</button></Link>
                <Link className="nav-link" to="/about"><button>About</button></Link>
            </div>
        </>
    )
}