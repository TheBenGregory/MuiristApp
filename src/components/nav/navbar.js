import React from "react"
import { Link, useHistory } from "react-router-dom"



export const NavBar = () => {
    const history = useHistory()

    return (
        <ul className="navbar">
            {
                (localStorage.getItem("muirist_id") !== null) ?
                    
                        <Link className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("muirist_id")
                                history.push({ pathname: "/" })
                            }}><button>Logout</button></Link>
                     :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login"><button>Login</button></Link>
                        </li>
                    </>
            }        </ul>
    )
}
