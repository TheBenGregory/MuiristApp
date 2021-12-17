import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./backpack.css"
import { getMyLists } from '../apiManager.js'
import { Button } from '../globalStyles.js'
import { NewSnippet } from "../snippets/snippetModal.js"

export const Backpack = () => {

    const [lists, setLists] = useState([])
    const [snippet, setSnippets] = useState([])
    useEffect(() => {
            if (lists.length != 0) {
            let copy = [...snippet]
            for (let list of lists) {
                // debugger
                for (let snips of list?.Snippets) {
                    if (!copy.some(snip=>snip.id == snips.id)){
                        copy.push(snips) }
                }
            }
            setSnippets(copy)
        }
    }, [lists])
    

    
    useEffect(() => {
        getMyLists()
            .then((data) => {
                setLists(data)
            })
    }, [])

    return (
        <>
            <div>
                All My Snippets

                    {/* {lists.filter(list => list.Snippets.park.id).map(filteredList => (
                        <li>
                            {filteredList}
                        </li>
                    ))
                    } */}

                <ul><li>
                    {
                        snippet.map(snippetList => <div value={snippetList?.id}>{snippetList?.title}</div>)
                    }</li></ul>

                    
                     
            </div>
            <div><Link className="nav-link" to="/parks"><Button>Explore the Parks</Button></Link></div>
        </>
    )
}

