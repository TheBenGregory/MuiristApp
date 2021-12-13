import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { Button } from "../globalStyles.js"


export const Login = () => {
    const email = useRef()
    const password = useRef()
    
    const invalidDialog = useRef()
    const history = useHistory()
    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://localhost:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value,
                
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid) {
                    localStorage.setItem("muirist_id", res.token )
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <Button className="button--close" onClick={e => invalidDialog.current.close()}>Close</Button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-control" defaultValue="JCena@gmail.com" placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" defaultValue="pwd" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign:"center"
                    }}>
                        <Button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</Button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
