import React, { useState, useEffect } from 'react'
import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./darkmode.js"

const StyledApp = styled.div

export const DarkModeToggle = () => {

    const [theme, setTheme] = useState("light");
    const themeToggler = (
        theme === "light" ? setTheme("dark") : setTheme("light"))

    return (
        <>
            <div>Hello World</div>
            <ThemeProvider theme={theme === "light" ? lightTheme : darkTheme} >
                <StyledApp><button onClick={() => themeToggler()}>Change Theme</button></StyledApp>
            </ThemeProvider>

        </>
    )
}
