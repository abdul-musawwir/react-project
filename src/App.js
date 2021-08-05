import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Login from './Components/Login'
import Home from './Components/Home'
import About from './Components/About'
import Entry from './Components/Entry'
import Services from './Components/Services'
import './App.css';
import Navbar from './Components/utils/Navbar';
import ShowResult from './Components/ShowResult';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'><Login/></Route>
          <Route path='/home'><Navbar/><Home/></Route>
          <Route path='/about'><Navbar/><About/></Route>
          <Route path='/entry'><Navbar/><Entry/></Route>
          <Route path='/services'><Navbar/><Services/></Route>
          <Route path='/showresults'><Navbar/><ShowResult/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
