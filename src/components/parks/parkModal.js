import React, { useEffect, useState, useRef, useCallback, } from "react"
import { Link, useHistory } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import { Background, ModalWrapper, ModalContent, CloseModalButton } from "./parkModalStyles.js"
import { Button } from "../globalStyles.js"
import { addSnippet, removeSnippet, getAllSnippets } from "../snippets/snippetManager.js";

export const ParkModal = ({ showModal, setShowModal, parkId }) => {
    const [snippets, setSnippets] = useState([])
    const [parkSnippets, setParkSnippets] = useState([])
    const modalRef = useRef();

    //BEGIN MODAL SECTION
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
// END OF MODAL SECTION


    // useEffect(() => {
    //     getAllSnippets()
    //     .then((data) => {
    //         setSnippets(data)
    //     })
    //     }, [])


    const snippetFetcher = () => {
        getAllSnippets().then(data => setSnippets(data))
    }
    useEffect(() => {
        snippetFetcher()
    }, [])

    useEffect(
        () => {
            
            
            if (snippets && parkId) {
            const onlyParkSnippets = snippets.filter(emp => emp.park.id === parkId)
            setParkSnippets(onlyParkSnippets) }
            
        }, [parkId])



    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>

                            <ModalContent>{
                                parkSnippets.map(snippet => {
                                    return <section key={snippet.id} className="registration">
                                        <div className="registration__game"><b>{snippet.title}</b> <i>{snippet.content}</i></div>
                                        {
                                            snippet.joined
                                                ? <Button
                                                    onClick={() => addSnippet(snippet.id).then(() => snippetFetcher())}
                                                >Remove</Button>
                                                : <Button
                                                    onClick={() => removeSnippet(snippet.id).then(() => snippetFetcher())}
                                                >Add</Button>
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