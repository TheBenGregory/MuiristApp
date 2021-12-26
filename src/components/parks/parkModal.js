import React, { useEffect, useState, useRef, useCallback, } from "react"
import { Link, useHistory } from 'react-router-dom'
import { useSpring, animated } from 'react-spring';
import { Background, ModalWrapper, ModalContent, ModalContentRight, CloseModalButton } from "./parkModalStyles.js"
import { Button } from "../globalStyles.js"
import { addSnippet, removeSnippet, getAllSnippets } from "../snippets/snippetManager.js";
import { NewSnippet } from "../snippets/snippetModal.js"

export const ParkModal = ({ showModal, setShowModal, parkId, showContent }) => {
    const [snippets, setSnippets] = useState([])
    const [parkSnippets, setParkSnippets] = useState([])
    const [contentView, setContentView] = useState([])
    
    // MODAL CONTROL
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
    // MODAL CONTROL


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
                setParkSnippets(onlyParkSnippets)
            }

        }, [parkId])

    // const showContent =  {
    //         if (e.key === 'Escape' && showModal) {
    //             setShowModal(false);
    //             console.log('I pressed');
    //         }
    //     },
    //     [setShowModal, showModal]
    // );




    return (
        <>
            {showModal ? (
                <Background onClick={closeModal} ref={modalRef}>
                    <animated.div style={animation}>
                        <ModalWrapper showModal={showModal}>

                            <ModalContent>{
                                parkSnippets.map(snippet => {
                                    return <section key={snippet.id}>
                                        <div>
                                            <div>
                                                <Button onClick={() => setContentView(!contentView)} value={snippet.id}>{snippet.title}</Button>
                                            </div>


                                        </div>
                                    </section>
                                }
                                )}
                            </ModalContent>
                            <ModalContentRight>{
                                contentView ?
                                    parkSnippets.map(snippet => {
                                        return <section key={snippet.id}>
                                            <div>
                                                <Button onClick={showContent}>
                                                    <i>{snippet.content}</i>
                                                </Button>

                                            </div>
                                            <Button id="btn"
                                                onClick={() => addSnippet(snippet.id).then(() => snippetFetcher())}
                                            >Add to Backpack</Button>

                                        </section>
                                    }
                                    ) : null}

                            </ModalContentRight>
                            <CloseModalButton
                                aria-label='Close modal'
                                onClick={() => setShowModal(prev => !prev)}
                            />
                        </ModalWrapper>
                    </animated.div>
                </Background>
            ) : null
            }
            <Button><Link to="/snippets">Add Snippet</Link></Button>
        </>
    )
}