import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./parks.css"
import { getAllParks } from '../apiManager.js'
import { GlobalStyle, Button} from "../globalStyles";
import { ParkModal } from "./parkModal";
import { Container } from "./parkModalStyles";


export const Parks = () => {

    const [parks, setParks] = useState([])
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    };

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
                    <li><Container>
                        <Button onClick={openModal}>{
                    parks.map(park => <Button value={park.id}>{park.name}</Button>)
                }</Button>
                        <ParkModal showModal={showModal} setShowModal={setShowModal} />
                        <GlobalStyle />
                    </Container></li>
                </ul><div>
                    
                    </div>
                
            </div>
        </>
    )
}