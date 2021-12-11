import React from "react";
import { useHistory } from "react-router-dom"
import { Button } from "../globalStyles.js"


export const Footer = () => {
    let history = useHistory(-1)

    return (
        <>  
            <div> 
                <br></br>
                <Button className="foot-link" onClick={history.goBack}>go back</Button>
            </div>
        </>
    )
}