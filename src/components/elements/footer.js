import React from "react";
import { useHistory } from "react-router-dom"
import { Button, Content } from "../globalStyles.js"


export const Footer = () => {
    let history = useHistory(-1)

    return (
        <>  
            <div> 
                <br></br>
                <Content><Button className="foot-link" onClick={history.goBack}>go back</Button></Content>
            </div>
        </>
    )
}