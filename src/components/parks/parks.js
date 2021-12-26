import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./parks.css"
import { getAllParks } from '../apiManager.js'
import { GlobalStyle, Button, Content } from "../globalStyles";
import { ParkModal } from "./parkModal";
import { Container } from "./parkModalStyles";


export const Parks = () => {

    const [parks, setParks] = useState([])
    const [selectedPark, setSelectedPark] = useState([])
    const [showModal, setShowModal] = useState(false);
    
    const openModal = (parkId) => {
        setShowModal(prev => !prev);
        setSelectedPark(parkId)
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
                

                <ul>
                    <li><Container>
                        <Button>{
                            parks.map(park => <Button onClick={() => openModal(park.id)} value={park.id}>{park.name}</Button>)
                        }</Button>
                        <ParkModal parkId={selectedPark} showModal={showModal} setShowModal={setShowModal} />
                        <GlobalStyle />
                    </Container></li>
                </ul><div>
                    {/* <Button onClick={openModal}>Add a Snippet</Button>
                    <NewSnippet showModal={showModal} setShowModal={setShowModal} /> */}
                    <Link className="nav-link" to="/parks"><Content><Button>Explore the Parks</Button></Content></Link>
                </div>

            </div>
        </>
    )
}