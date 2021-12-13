import React from "react";
import { Link } from "react-router-dom"
import "./about.css"
import { Button } from "../globalStyles.js"

export const About = () => {
    return (
        <>
            <div>
            <div className="main__abt"><div className="main__h3"> gigAgent is my capstone project for Nashville Software School Cohort #50 </div><div className="main__sub">
       It was created using JavaScript, ReactJS, and CSS</div></div>

      <div className="social__header">For more information or to contact me please reach out to me at any of the locations below:</div>

      <ul className="social">
         <li className="social__link"><a href="https://www.linkedin.com/in/bgmakesithappen/"><img style={{ height: "40px", paddingRight: "10px" }} src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjUxMnB0IiB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMnB0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Im0yNTYgMGMtMTQxLjM2MzI4MSAwLTI1NiAxMTQuNjM2NzE5LTI1NiAyNTZzMTE0LjYzNjcxOSAyNTYgMjU2IDI1NiAyNTYtMTE0LjYzNjcxOSAyNTYtMjU2LTExNC42MzY3MTktMjU2LTI1Ni0yNTZ6bS03NC4zOTA2MjUgMzg3aC02Mi4zNDc2NTZ2LTE4Ny41NzQyMTloNjIuMzQ3NjU2em0tMzEuMTcxODc1LTIxMy4xODc1aC0uNDA2MjVjLTIwLjkyMTg3NSAwLTM0LjQ1MzEyNS0xNC40MDIzNDQtMzQuNDUzMTI1LTMyLjQwMjM0NCAwLTE4LjQwNjI1IDEzLjk0NTMxMy0zMi40MTAxNTYgMzUuMjczNDM3LTMyLjQxMDE1NiAyMS4zMjgxMjYgMCAzNC40NTMxMjYgMTQuMDAzOTA2IDM0Ljg1OTM3NiAzMi40MTAxNTYgMCAxOC0xMy41MzEyNSAzMi40MDIzNDQtMzUuMjczNDM4IDMyLjQwMjM0NHptMjU1Ljk4NDM3NSAyMTMuMTg3NWgtNjIuMzM5ODQ0di0xMDAuMzQ3NjU2YzAtMjUuMjE4NzUtOS4wMjczNDMtNDIuNDE3OTY5LTMxLjU4NTkzNy00Mi40MTc5NjktMTcuMjIyNjU2IDAtMjcuNDgwNDY5IDExLjYwMTU2My0zMS45ODgyODIgMjIuODAwNzgxLTEuNjQ4NDM3IDQuMDA3ODEzLTIuMDUwNzgxIDkuNjA5Mzc1LTIuMDUwNzgxIDE1LjIxNDg0NHYxMDQuNzVoLTYyLjM0Mzc1cy44MTY0MDctMTY5Ljk3NjU2MiAwLTE4Ny41NzQyMTloNjIuMzQzNzV2MjYuNTU4NTk0YzguMjg1MTU3LTEyLjc4MTI1IDIzLjEwOTM3NS0zMC45NjA5MzcgNTYuMTg3NS0zMC45NjA5MzcgNDEuMDE5NTMxIDAgNzEuNzc3MzQ0IDI2LjgwODU5MyA3MS43NzczNDQgODQuNDIxODc0em0wIDAiLz48L3N2Zz4=" /></a><div className="icon__text">LinkedIn</div></li>
         <li className="social__link"><a href="https://github.com/TheBenGregory/"><img style={{ height: "40px", paddingRight: "10px" }} src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE5LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPHN2ZyB2ZXJzaW9uPSIxLjEiIGlkPSJDYXBhXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB2aWV3Qm94PSIwIDAgNTEyIDUxMiIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMjsiIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGc+DQoJCTxwYXRoIGQ9Ik0yNTUuOTY4LDUuMzI5QzExNC42MjQsNS4zMjksMCwxMjAuNDAxLDAsMjYyLjM1M2MwLDExMy41MzYsNzMuMzQ0LDIwOS44NTYsMTc1LjEwNCwyNDMuODcyDQoJCQljMTIuOCwyLjM2OCwxNy40NzItNS41NjgsMTcuNDcyLTEyLjM4NGMwLTYuMTEyLTAuMjI0LTIyLjI3Mi0wLjM1Mi00My43MTJjLTcxLjIsMTUuNTItODYuMjQtMzQuNDY0LTg2LjI0LTM0LjQ2NA0KCQkJYy0xMS42MTYtMjkuNjk2LTI4LjQxNi0zNy42LTI4LjQxNi0zNy42Yy0yMy4yNjQtMTUuOTM2LDEuNzI4LTE1LjYxNiwxLjcyOC0xNS42MTZjMjUuNjk2LDEuODI0LDM5LjIsMjYuNDk2LDM5LjIsMjYuNDk2DQoJCQljMjIuODQ4LDM5LjI2NCw1OS45MzYsMjcuOTM2LDc0LjUyOCwyMS4zNDRjMi4zMDQtMTYuNjA4LDguOTI4LTI3LjkzNiwxNi4yNTYtMzQuMzY4DQoJCQljLTU2LjgzMi02LjQ5Ni0xMTYuNjA4LTI4LjU0NC0xMTYuNjA4LTEyNy4wMDhjMC0yOC4wNjQsOS45ODQtNTEuMDA4LDI2LjM2OC02OC45OTJjLTIuNjU2LTYuNDk2LTExLjQyNC0zMi42NCwyLjQ5Ni02OA0KCQkJYzAsMCwyMS41MDQtNi45MTIsNzAuNCwyNi4zMzZjMjAuNDE2LTUuNjk2LDQyLjMwNC04LjU0NCw2NC4wOTYtOC42NGMyMS43MjgsMC4xMjgsNDMuNjQ4LDIuOTQ0LDY0LjA5Niw4LjY3Mg0KCQkJYzQ4Ljg2NC0zMy4yNDgsNzAuMzM2LTI2LjMzNiw3MC4zMzYtMjYuMzM2YzEzLjk1MiwzNS4zOTIsNS4xODQsNjEuNTA0LDIuNTYsNjhjMTYuNDE2LDE3Ljk4NCwyNi4zMDQsNDAuOTI4LDI2LjMwNCw2OC45OTINCgkJCWMwLDk4LjcyLTU5Ljg0LDEyMC40NDgtMTE2Ljg2NCwxMjYuODE2YzkuMTg0LDcuOTM2LDE3LjM3NiwyMy42MTYsMTcuMzc2LDQ3LjU4NGMwLDM0LjM2OC0wLjMyLDYyLjA4LTAuMzIsNzAuNDk2DQoJCQljMCw2Ljg4LDQuNjA4LDE0Ljg4LDE3LjYsMTIuMzUyQzQzOC43Miw0NzIuMTQ1LDUxMiwzNzUuODU3LDUxMiwyNjIuMzUzQzUxMiwxMjAuNDAxLDM5Ny4zNzYsNS4zMjksMjU1Ljk2OCw1LjMyOXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg==" /></a><div className="icon__text">gitHub</div></li>
         <li className="social__link"><a href-="https://jbgregory.com/"><img style={{ height: "40px", paddingRight: "10px" }} src="https://img.icons8.com/ios-filled/50/000000/twitter-circled--v1.png"/></a><div className="icon__text">@BenGregoryTN</div></li>
         
      </ul>
                
            </div>
        </>
    )
}
