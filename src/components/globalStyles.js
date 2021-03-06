import styled from 'styled-components'
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: nps_router;
    
  }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
`;

export const Button = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 6px 14px;
  font-family: nps_router;
  border-radius: 6px;
  border: none;
  align: center;
  background: #6E6D70;
  box-shadow: 0px 0.5px 1px rgba(0, 0, 0, 0.1), inset 0px 0.5px 0.5px rgba(255, 255, 255, 0.5), 0px 0px 0px 0.5px rgba(0, 0, 0, 0.12);
  color: #DFDEDF;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
`;

export const Header = styled.header`
  display: flex;
  align-self: center;
  justify-content: center;
  font-family: nps_router;
  font-size: 55px;
  `;

  export const Content = styled.div`
  display: flex;
  align-self: center;
  justify-content: center;
  `; 
// .button-12:focus {
//   box-shadow: inset 0px 0.8px 0px -0.25px rgba(255, 255, 255, 0.2), 0px 0.5px 1px rgba(0, 0, 0, 0.1), 0px 0px 0px 3.5px rgba(58, 108, 217, 0.5);
//   outline: 0;
// }
