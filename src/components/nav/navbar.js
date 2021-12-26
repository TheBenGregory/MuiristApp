import React from "react"
import { Link, useHistory } from "react-router-dom"
import { DarkModeToggle } from "../elements/themeswitch"
import { Button, Header } from "../globalStyles.js"
import "./navbar.css"

export const NavBar = () => {
    const history = useHistory()

    return (

        <>
            <ul className="navbar">
                {
                    (localStorage.getItem("muirist_id") !== null) ?

                        <Button onClick={() => {
                            localStorage.removeItem("muirist_id")
                            history.push({ pathname: "/" })
                        }}>Logout</Button>
                        :
                        <>
                            <li className="nav-item">
                                <Link className="nav-link" to="/login"><Button>Login</Button></Link>
                            </li>
                            {/* <li>{DarkModeToggle}</li> */}
                        </>
                }        </ul>
            <Header className="banner">
                <h1>Muirist</h1>
            </Header>
        </>
    )
}
