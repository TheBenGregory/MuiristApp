import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./snippets.css"
import { Button, Content } from "../globalStyles";
import { NewSnippet } from "./snippetModal";
import { Container, Headline } from "../globalStyles";


export const Snippets = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <div>   <Container>
                        <Button onClick={openModal}>Add a Snippet</Button>
                        <NewSnippet showModal={showModal} setShowModal={setShowModal} />
                        </Container>
            </div>
            <Link className="nav-link" to="/parks"><Content><Button>Explore the Parks</Button></Content></Link>
        </>
    )
}