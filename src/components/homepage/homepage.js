import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import { Button, Header, Content } from "../globalStyles.js"
import "./homepage.css"
import { parkApiData } from "../apiManager";

export const HomePage = () => {

    const [parks, setParkImg] = useState([])

    // useEffect(() => {
    //     effect
    //     return () => {
    //         cleanup
    //     }
    // }, [input])
    const [imgUrl, setImgUrl] = useState([])

    useEffect(() => {
        const fetchParks = async () => {

            try {
                const fetchingParks = await parkApiData();


                setParkImg(fetchingParks);
            } catch (err) {
                console.log(err);
            }
        };
        fetchParks()
        // .then(randomImg)
    }, []);

    useEffect(() => {
        if (parks.length !== 0) {
            randomImg()
        }
    }, [parks])


    const randomImg = () => {
        
        const random = parks?.data[Math.floor(Math.random() * 50) + 1];
        let imgUrl = random.images[0].url
        setImgUrl(imgUrl);
    };
    console.log(parks);

    return (
        <>
            <div>
                <div className="hero">
                <img className="img" src={imgUrl} width="500px"/>

                </div>
                <Link className="nav-link" to="/parks"><Content><Button>Explore the Parks</Button></Content></Link>
            </div>
        </>
    )
}

