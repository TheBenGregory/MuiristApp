import React from "react";
import { Link, useHistory } from "react-router-dom"
import "./footer.css"

export const Footer = () => {
    let history = useHistory(-1)

    return (
        <>  
            <div> 
                <button className="foot-link" onClick={history.goBack}>go back</button>
            </div>
        </>
    )
}