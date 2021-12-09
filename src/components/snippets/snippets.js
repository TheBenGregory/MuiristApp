import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./snippets.css"
import { GlobalStyle } from "../globalStyles";
import { NewSnippet } from "./snippetModal";
import { Container, Button } from "./snippetModalStyles";


export const Snippets = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <div>
                <header>This Will Be the Name of a US National Park</header>
                <ul>
                    <li><Container>
                    <li>A list of snippets will go here
                    </li>
                    <li><Link className="nav-link" to="/parks">This will be a snippet</Link>
                    </li>
                        <Button onClick={openModal}>Add a Snippet</Button>
                        <NewSnippet showModal={showModal} setShowModal={setShowModal} />
                        <GlobalStyle />
                    </Container></li>
                </ul>
                <Link className="nav-link" to="/backpack"><button>My Backpack</button></Link>
                <Link className="nav-link" to="/about"><button>About</button></Link>
            </div>
        </>
    )
}