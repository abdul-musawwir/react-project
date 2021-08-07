import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Login from './Components/Login'
import Home from './Components/Home'
import Entry from './Components/Entry'
import Exit from './Components/Exit'
import './App.css';
import Navbar from './Components/utils/Navbar';
import ShowResult from './Components/ShowResult';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'><Login/></Route>
          <Route path='/home'><Navbar/><Home/></Route>
          <Route path='/search'><Navbar/><Search/></Route>
          <Route path='/entry'><Navbar/><Entry/></Route>
          <Route path='/exit'><Navbar/><Exit/></Route>
          <Route path='/showresults'><Navbar/><ShowResult/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
