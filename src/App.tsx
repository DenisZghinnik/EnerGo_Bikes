import React from 'react';
import {createGlobalStyle} from "styled-components";
import Header from "./components/Header/Header";
import {BrowserRouter as Router} from "react-router-dom";
function App() {
    return (
        <Router>
            <div>
                <GlobalStyle/>
                <Header/>
            </div>
        </Router>
    );
}

const GlobalStyle = createGlobalStyle`
  *{
     padding: 0;
     margin: 0;
     box-sizing: border-box;
  }
  body{
    font-family: sans-serif;
  }
`

export default App;
