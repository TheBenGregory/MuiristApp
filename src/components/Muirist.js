import React, { useState } from "react";
import { Route, Redirect } from "react-router-dom";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/login";
import { Register } from "./auth/register";
import { Footer } from "./elements/footer";
import { NavBar } from "./nav/navbar.js"
import { DarkModeToggle } from "./elements/themeswitch";
import { AboutNav } from "./about/aboutNav";


export const Muirist = () => (

  <>
    <Route
      render={() => {
        if (localStorage.getItem("muirist_id")) {
          return (
            <>
              <NavBar />
              <ApplicationViews />
              <AboutNav />
              <Footer />
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/register">
      <Register />
    </Route>
  </>
)



export default Muirist;
