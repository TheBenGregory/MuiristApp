import React, { useEffect, useState, useRef, useCallback, } from "react"
import { useHistory, useParams } from "react-router-dom"
import { useSpring, animated } from 'react-spring';
import { createSnippet, getPark } from "../apiManager.js"
import { Background, ModalWrapper, ModalContent, CloseModalButton  } from "./snippetModalStyles.js"


export const NewSnippet = ({ showModal, setShowModal }) => {
    const [park, setState] = useState([])
    const { parkId } = useParams()

    const [snippet, setSnippets] = useState({
        title: "",
        content: "",
        parkId: "",
        muiristId: ""
    })

    const handleControlledInputChange = (event) => {
        const newSnippet = Object.assign({}, snippet)
        newSnippet[event.target.name] = event.target.value
        setSnippets(newSnippet)
    }

  
    useEffect(() => {
      if (parkId) {
        getPark(parkId).then((parkData) => setState({
          ...parkData,
          name: parkData.name,
          location: parkData.location,
          
        }))
      }
    }, [parkId])
    
    

    const createNewSnippet = (e) => {
        e.preventDefault()
        const snippetContent = {
            title: snippet.title,
            content: snippet.content,
            parkId: 1
            
        }

        return createSnippet(snippetContent)
    }
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
      }
    };
  
    const keyPress = useCallback(
      e => {
        if (e.key === 'Escape' && showModal) {
          setShowModal(false);
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


    return (
        <>
        {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              
              <ModalContent>
              <div className="inputBox"><h3>Add A Snippet</h3></div>
            <div><input type="text" name="title" placeholder="Title" value={snippet.title} onChange={handleControlledInputChange}></input></div>
            <div><input type="text" name="content" value={snippet.content} onChange={handleControlledInputChange}></input></div>     
            <button onClick={createNewSnippet}>Save</button>
              </ModalContent>
              <CloseModalButton
                aria-label='Close modal'
                onClick={() => setShowModal(prev => !prev)}
              />
            </ModalWrapper>
          </animated.div>
        </Background>
      ) : null}
            
        </>
    )
}