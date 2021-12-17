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
    return fetch("http://localhost:8000/snippets", {
      method: "POST",
      headers: {
        "Authorization": `Token ${localStorage.getItem("muirist_id")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(snippet)
     })
        
  }
//removeSnippet refers to removing from the users backpack != delete

export const removeSnippet = snippetId => {
    return fetch(`http://localhost:8000/snippets/${snippetId}`, {
        method: "DELETE",
        headers:{
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        }
    })
        .then(getAllSnippets)
}

//addSnippet refers to adding to the users backpack != create

export const addSnippet = (snippetId) => {
    return fetch(`http://localhost:8000/snippets/${snippetId}/addToBackpack`, {
        method: "POST",
        headers:{
            "Authorization": `Token ${localStorage.getItem("muirist_id")}`
        }
    })
        .then(response => response.json())
        .then(getAllSnippets)
}

export const updateSnippetsFetch = (snippet) => {
    return fetch(`http://localhost:8000/snippets/${snippet.id}`, {
      method: "PUT",
      headers: {
        "Authorization": `Token ${localStorage.getItem("muirist_id")}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(snippet)
     })
        
  }
