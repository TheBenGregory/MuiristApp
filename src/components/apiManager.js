export const getAllSnippets = () => {
    return fetch("http://localhost:8000/snippets", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        },
    })
        .then(res => res.json())
}

export const createSnippet = (snippet) => {
   debugger 
    return fetch(`http://localhost:8000/snippets`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        },
        body: JSON.stringify(snippet)
    })
        .then(response => response.json())
        .then(json => console.log(json))
}

export const getAllParks = () => {
    return fetch("http://localhost:8000/parks", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        },
    })
        .then(res => res.json())
}
export const getPark = (parkId) => {
    return fetch(`http://localhost:8000/parks/${parkId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("muirist_token")}`
        }
    })
        .then(response => response.json())
}