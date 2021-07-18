import React from 'react'
import { BrowserRouter,Route, Switch } from 'react-router-dom';
import Login from './Components/Login'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import Services from './Components/Services'
import './App.css';
import Navbar from './Components/utils/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path='/'><Login/></Route>
          <Route path='/home'><Navbar/><Home/></Route>
          <Route path='/about'><Navbar/><About/></Route>
          <Route path='/contact'><Navbar/><Contact/></Route>
          <Route path='/services'><Navbar/><Services/></Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
