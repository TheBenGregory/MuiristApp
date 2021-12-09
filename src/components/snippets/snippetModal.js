import React from "react"
import { useEffect, useState, useRef, useCallback } from "react"
import { useSpring, animated } from 'react-spring';
import { addSnippet, getAllSnippets } from "../apiManager/apiManager.js"
import { Background, ModalWrapper, ModalContent, CloseModalButton  } from "./snippetModalStyles.js"


export const NewSnippet = ({ showModal, setShowModal }) => {

    const [snippet, setSnippets] = useState({
        title: "",
        publicationDate: "",
        content: "",
        categoryId: "",
        imageUrl: "",
        approved: true
    })

    const handleControlledInputChange = (event) => {
        const newSnippet = Object.assign({}, snippet)
        newSnippet[event.target.name] = event.target.value
        setSnippets(newSnippet)
    }

    useEffect(
        () => {
            getAllSnippets()
                .then((data) => {
                    setSnippets(data)
                })
        },
        []
    )

    const createNewSnippet = (e) => {
        e.preventDefault()
        const snippetContent = {
            user: parseInt(localStorage.getItem("muirist_id")),
            // title: post.title,
            // publicationDate: post.publication_date,
            // content: post.content,
            // categoryId: post.categoryId,
            // imageUrl: "",
            // approved: true
        }

        return addSnippet(snippetContent)
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
            <div><input type="text" name="title" placeholder="A cool title here!" value={snippet.title} onChange={handleControlledInputChange}></input></div>
            <div><input type="date" name="publication_date" value={snippet.publication_date} onChange={handleControlledInputChange}></input></div>
            <div><input type="text" name="content" placeholder="A cool content here!" value={snippet.content} onChange={handleControlledInputChange}></input></div>
            
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