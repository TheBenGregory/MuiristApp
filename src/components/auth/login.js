import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import { Button, Container, Header } from "../globalStyles.js"
import { server } from "../apiManager"

export const Login = () => {
    const email = useRef()
    const password = useRef()

    const invalidDialog = useRef()
    const history = useHistory()
    const handleLogin = (e) => {
        e.preventDefault()

        return fetch(`${server.base}/login`, {
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
                    localStorage.setItem("muirist_id", res.token)
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login" style={{ textAlign: "center" }}>
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <Button className="button--close" onClick={e => invalidDialog.current.close()}>Close</Button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <Header>Welcome to Muirist</Header>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="text" id="email" className="form-control" defaultValue="JCena@gmail.com" placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" defaultValue="pwd" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign: "center"
                    }}><Container>
                            <Button className="btn btn-1 btn-sep icon-send" type="submit" >Sign In</Button></Container>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}
