import React from "react"
import { useEffect, useState } from "react"
import { addPark, getAllParks } from "../ApiManager"


export const NewPark = () => {
    const [categories, setCategory] = useState([])
    const [park, setParks] = useState({
        title: "",
        publicationDate: "",
        content: "",
        categoryId: "",
        imageUrl: "",
        approved: true
    })

    const handleControlledInputChange = (event) => {
        const newPark = Object.assign({}, park)
        newPark[event.target.name] = event.target.value
        setParks(newPark)
    }

   
    useEffect(
        () => {
            getAllParks()
                .then((data) => {
                    setParks(data)
                })
        },
        []
    )

    const createNewPark = (e) => {
        e.preventDefault()
        const parkContent = {
            user: parseInt(localStorage.getItem("muirist_id")),
            // title: post.title,
            // publicationDate: post.publication_date,
            // content: post.content,
            // categoryId: post.categoryId,
            // imageUrl: "",
            // approved: true
        }

        return createPark(parkContent)
    }

    return (
        <>
            <div className="inputBox"><h3>Add A Park</h3></div>
            <div><input type="text" name="title" placeholder="A cool title here!" value={post.title} onChange={handleControlledInputChange}></input></div>
            <div><input type="date" name="publication_date" value={post.publication_date} onChange={handleControlledInputChange}></input></div>
            <div><input type="text" name="content" placeholder="A cool content here!" value={post.content} onChange={handleControlledInputChange}></input></div>
            <div><select name="categoryId" value={post.categoryId} onChange={(event) => handleControlledInputChange(event)}>
                <option value="0">Category</option>
                {
                    categories.map(category => <option value={category.id}>{category.label}</option>)
                }
            </select></div>
            <button onClick={createNewPost}>Save</button>
        </>
    )
}