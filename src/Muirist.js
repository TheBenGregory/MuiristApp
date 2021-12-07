import React from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./components/auth/login";
import { Register } from "./components/auth/register";
import { NavBar } from "./components/nav/navbar.js"


export const Muirist = () => (
  <>
      <Route render={() => {
          if (localStorage.getItem("muirist_user")) {
              return <>
                  <NavBar />
                  <ApplicationViews />
              </>
          } else {
              return <Redirect to="/login" />
          }
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
