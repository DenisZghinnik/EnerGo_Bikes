import React from 'react';
import {createGlobalStyle} from "styled-components";
import Header from "./components/Header/Header";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Profile from "./components/Profile/Profile";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Page404 from './components/Page404';
function App() {
    return (
        <Router>
            <GlobalStyle/>
            <Header/>
            <Switch>
                <Route exact path={['/','/home']}>
                    <Home/>
                </Route>
                <Route exact path='/profile'>
                    <Profile/>
                </Route>
                <Route path='*'>
                    <Page404/>
                </Route>
            </Switch>
            <Footer/>
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
