import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./snippets.css"
import { GlobalStyle } from "../globalStyles";
import { NewSnippet } from "./snippetModal";
import { Container, Button, Headline } from "./snippetModalStyles";


export const Snippets = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    };

    return (
        <>
            <div>   
                        <Button onClick={openModal}>Add a Snippet</Button>
                        <NewSnippet showModal={showModal} setShowModal={setShowModal} />
                        
            </div>
        </>
    )
}