export const createSnippet = (snippet) => {
    
    return fetch(`https://muirist-server.herokuapp.com/snippets`, {
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
    return fetch("https://muirist-server.herokuapp.com/parks", {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        },
    })
        .then(res => res.json())
}
export const getPark = (parkId) => {
    return fetch(`https://muirist-server.herokuapp.com/parks/${parkId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        }
    })
        .then(response => response.json())
}

export const getAllLists = () => {
    return fetch(`https://muirist-server.herokuapp.com/lists`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        }
    
    })
        .then(response => response.json())
}

export const getMyLists = () => {
    return fetch(`https://muirist-server.herokuapp.com/lists/myLists`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        }
    
    })
        .then(response => response.json())
}

