import React, { useEffect, useState, useRef, useCallback, } from "react"
import { useSpring, animated } from 'react-spring';
import { createSnippet, getAllParks } from "../apiManager.js"
import { Background, ModalWrapper, ModalContent, CloseModalButton } from "./snippetModalStyles.js"


export const NewSnippet = ({ showModal, setShowModal }) => {
  const [parks, setParks] = useState([])
  // const { parkId } = useParams()

  const [snippet, setSnippets] = useState({
    muiristId: "",
    title: "",
    content: "",
    parkId: ""

  })

  const [savedSnippet, setSavedSnippet] = useState(false)

  const handleControlledInputChange = (event) => {
    const newSnippet = Object.assign({}, snippet)
    newSnippet[event.target.name] = event.target.value
    setSnippets(newSnippet)
  }
  useEffect(() => {
    getAllParks()
      .then((data) => {
        setParks(data)
      })
  }, [])

  // useEffect(() => {
  //   if (parkId) {
  //     getPark(parkId).then((parkData) => setState({
  //       ...parkData,
  //       name: parkData.name,
  //       location: parkData.location,

  //     }))
  //   }
  // }, [parkId])




  //MODAL CONTROL//
  const modalRef = useRef();

  const animation = useSpring({
    config: {
      duration: 250
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : `translateY(-100%)`
  });

  const closeModal = e => {
    if (modalRef.current === e.target) {
      setShowModal(false);
      setSnippets({
        muiristId: "",
        title: "",
        content: "",
        parkId: ""});
      setSavedSnippet(false);
      }
  };

  const keyPress = useCallback(
    e => {
      if (e.key === 'Escape' && showModal) {
        setShowModal(false);
        setSnippets({
        muiristId: "",
        title: "",
        content: "",
        parkId: ""});
      setSavedSnippet(false);
        console.log('I pressed');
      }
    },
    [setShowModal, showModal]
  );

  useEffect(
    () => {
      document.addEventListener('keydown', keyPress);
      return () => document.removeEventListener('keydown', keyPress);
    },
    [keyPress]
  );
  //MODAL CONTROL//

  const createNewSnippet = (e) => {
    e.preventDefault()
    const snippetContent = {
      muiristId: parseInt(localStorage.getItem("muirist_id")),
      title: snippet.title,
      content: snippet.content,
      parkId: snippet.park

    }

    setSavedSnippet(true)
    return createSnippet(snippetContent);


  }

  return (
    <>
      {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>

              <ModalContent>
                <div className="inputBox"><h3>Add A Snippet</h3></div>
                <div><select name="park" value={parks.id} onChange={(event) => handleControlledInputChange(event)}>
                  <option value="0">Select Park</option>
                  {
                    parks.map(park => <option value={park.id}>{park.name}</option>)
                  }

                </select></div>
                <div><input type="text" name="title" placeholder="Title" value={snippet.title} onChange={handleControlledInputChange}></input></div>
                <div><input type="text" name="content" value={snippet.content} onChange={handleControlledInputChange}></input></div>
                {savedSnippet ? <button>Saved!</button> : <button onClick={createNewSnippet}>Save</button>}
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={(event) => {setShowModal(false);
                  setSnippets({
                    muiristId: "",
                    title: "",
                    content: "",
                    parkId: ""});
                  setSavedSnippet(false);}}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}

    </>
  )
}