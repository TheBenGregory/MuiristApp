export const server  = {
    base: "https://muirist-server.herokuapp.com"
}

export const createSnippet = (snippet) => {
    
    return fetch(`${server.base}/snippets`, {
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
    return fetch(`${server.base}/parks`, {
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        },
    })
        .then(res => res.json())
}
export const getPark = (parkId) => {
    return fetch(`${server.base}/parks/${parkId}`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        }
    })
        .then(response => response.json())
}

export const getAllLists = () => {
    return fetch(`${server.base}/lists`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        }
    
    })
        .then(response => response.json())
}

export const getMyLists = () => {
    return fetch(`${server.base}/lists/myLists`, {
        headers: {
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        }
    
    })
        .then(response => response.json())
}

