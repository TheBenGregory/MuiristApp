import React from "react"
import { Link, useHistory } from "react-router-dom"



export const NavBar = () => {
    const history = useHistory()

    return (
        <ul className="navbar">
            <li className="navbar__item">
                
            </li>
            
            {
                (localStorage.getItem("rare_user_id") !== null) ?
                    <li className="nav-item">
                        
                        <Link className="nav-link" to= "/posts"><button>All Posts</button></Link>
                        <Link className="nav-link" to="/myPosts"><button>My Posts</button></Link>
                        <Link className="nav-link" to="/categories"><button>Category Manager</button></Link>
                        <Link className="nav-link" to="/tags"><button>Tag Manager</button></Link>
                        <Link className="nav-link fakeLink"
                            onClick={() => {
                                localStorage.removeItem("rare_user_id")
                                history.push({ pathname: "/" })
                            }}
                        ><button>Logout</button></Link>
                    </li> :
                    <>
                        <li className="nav-item">
                            <Link className="nav-link" to="/login">Login</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/register">Register</Link>
                        </li>
                    </>
            }        </ul>
    )
}
