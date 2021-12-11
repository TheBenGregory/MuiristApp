import React, { useEffect, useState, useRef, useCallback, } from "react"
import { Link, useHistory } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import { Background, ModalWrapper, ModalContent, CloseModalButton  } from "./parkModalStyles.js"

import { addSnippet, removeSnippet, getAllSnippets } from "../snippets/snippetManager.js";

export const ParkModal = ({ showModal, setShowModal }) => {
    const [snippets, setSnippets] = useState([])
    const [parkSnippets, setParkSnippets ] = useState([])
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

    // useEffect(() => {
    //     getAllSnippets()
    //     .then((data) => {
    //         setSnippets(data)
    //     })
    //     }, [])

    useEffect(
        () => {
            const onlyParkSnippets = snippets.filter(emp => emp.parkId === snippets.park)
            setParkSnippets(onlyParkSnippets)
            console.log(onlyParkSnippets)
        }, [snippets])    
    
        const snippetFetcher = () => {
            getAllSnippets().then(data => setSnippets(data))
        }
    
        useEffect(() => {
            snippetFetcher()
        }, [])

    return (
        <>
        {showModal ? (
        <Background onClick={closeModal} ref={modalRef}>
          <animated.div style={animation}>
            <ModalWrapper showModal={showModal}>
              
              <ModalContent>{
              snippets.map(snippet => {
                    return <section key={snippet.id} className="registration">
                        <div className="registration__game"><b>{snippet.title}</b> <i>{snippet.content}</i></div>
                        {
                            snippet.joined
                                ? <button className="btn btn-3"
                                    onClick={() => addSnippet(snippet.id).then(() => snippetFetcher())}
                                    >Remove</button>
                                : <button className="btn btn-2"
                                    onClick={() => removeSnippet(snippet.id).then(() => snippetFetcher())}
                                    >Add</button>
                        }
                    </section>
                })}
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