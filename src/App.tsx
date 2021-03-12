import React from 'react';
import {createGlobalStyle} from "styled-components";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <Route path='/profile'>
                    <Profile/>
                </Route>
                <Route path='/'>
                    <Home/>
                </Route>
            </Switch>
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
    overflow-x: hidden;
  }
`

export default App;
