import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom"
import "./backpack.css"
import { getAllLists } from '../apiManager.js'

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
        getAllLists()
            .then((data) => {
                setLists(data)
            })
    }, [])

    return (
        <>
            <div>
                Placeholder Backpack

                <ul><li>
                    {
                        snippet.map(snippetList => <div value={snippetList?.id}>{snippetList?.title}</div>)
                    }</li></ul>
            </div>
        </>
    )
}

