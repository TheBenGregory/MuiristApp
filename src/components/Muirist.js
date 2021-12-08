import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/login";
import { Register } from "./auth/register";
import { Footer } from "./footer/footer";
import { NavBar } from "./nav/navbar.js"


export const Muirist = () => (
  <>
    <Route render={() => {

      return <>
        <Route>
          <NavBar />
          <ApplicationViews />
          <Footer />
        </Route>
      </>

    }} />

    <Route path="/login" render={() => {
      if (localStorage.getItem("muirist_user")) {
        return <Redirect to="/" />
      } else {
        return <Login />
      }
    }} />

    <Route path="/register" render={() => {
      if (localStorage.getItem("muirist_user")) {
        return <Redirect to="/" />
      } else {
        return <Register />
      }
    }} />
  </>
)



export default Muirist;
